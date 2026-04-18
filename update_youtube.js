const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const ytSearch = require('yt-search');

const postsDir = path.join(__dirname, 'posts');

// Helper to find all html files recursively
function getHtmlFiles(dir, files = []) {
    const fileList = fs.readdirSync(dir);
    for (const file of fileList) {
        const name = path.join(dir, file);
        if (fs.statSync(name).isDirectory()) {
            getHtmlFiles(name, files);
        } else if (name.endsWith('.html')) {
            files.push(name);
        }
    }
    return files;
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function main() {
    const files = getHtmlFiles(postsDir);
    console.log(`Found ${files.length} HTML files.`);

    for (const file of files) {
        console.log(`Processing: ${file}`);
        try {
            const html = fs.readFileSync(file, 'utf-8');
            const $ = cheerio.load(html, { decodeEntities: false });

            // Extract the magic technique name from h1
            let h1Text = $('h1').text().trim();
            // e.g. "더블 리프트: The Double Lift" -> "더블 리프트"
            let technique = h1Text.split(':')[0].trim();
            if (!technique) {
                technique = h1Text; // fallback
            }

            // Sometimes technique can be empty if h1 is empty
            if (!technique) {
                console.log(`Skipping ${file} - no title found.`);
                continue;
            }

            const searchQuery = `${technique} 마술 배우기`;
            console.log(`Searching YouTube for: ${searchQuery}`);
            
            let searchResult;
            try {
                searchResult = await ytSearch(searchQuery);
            } catch (err) {
                console.error(`Search failed for ${searchQuery}: ${err.message}`);
                continue;
            }

            const validVideos = [];
            for (const video of searchResult.videos) {
                if (validVideos.length >= 3) break;
                try {
                    const res = await fetch(`https://www.youtube.com/watch?v=${video.videoId}`);
                    const text = await res.text();
                    // Check if video allows embedding and is not restricted
                    if (text.includes('"playableInEmbed":true') && text.includes('"status":"OK"')) {
                        validVideos.push(video);
                    } else {
                        console.log(`  -> Skipping restricted/non-embeddable video: ${video.videoId}`);
                    }
                    await sleep(1000); // 1s delay for each fetch to avoid rate limits
                } catch (e) {
                    console.log(`  -> Fetch error for ${video.videoId}: ${e.message}`);
                }
            }

            const videos = validVideos;
            if (videos.length < 3) {
                console.log(`Warning: Found only ${videos.length} embeddable videos for ${technique}`);
            }

            // Find iframes
            const iframes = $('iframe');
            if (iframes.length !== 3) {
                console.log(`Warning: Found ${iframes.length} iframes in ${file}, expected 3.`);
            }

            let updatedCount = 0;
            iframes.each((i, elem) => {
                const video = videos[i % videos.length]; // fallback in case less than 3
                if (video) {
                    const embedUrl = `https://www.youtube.com/embed/${video.videoId}`;
                    $(elem).attr('src', embedUrl);
                    updatedCount++;
                }
            });

            if (updatedCount > 0) {
                fs.writeFileSync(file, $.html(), 'utf-8');
                console.log(`Updated ${updatedCount} iframes in ${file}`);
            }

            // Sleep to avoid rate limiting
            await sleep(2000);

        } catch (e) {
            console.error(`Error processing ${file}: ${e.message}`);
        }
    }
    console.log("Done updating all HTML files.");
}

main();
