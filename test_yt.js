const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const ytSearch = require('yt-search');

const testFile = path.join(__dirname, 'posts', 'card', 'card-01-double-lift.html');

async function test() {
    console.log(`Processing: ${testFile}`);
    try {
        const html = fs.readFileSync(testFile, 'utf-8');
        const $ = cheerio.load(html, { decodeEntities: false });

        let h1Text = $('h1').text().trim();
        let technique = h1Text.split(':')[0].trim();
        if (!technique) technique = h1Text;

        const searchQuery = `${technique} 마술 배우기`;
        console.log(`Searching YouTube for: ${searchQuery}`);
        
        const searchResult = await ytSearch(searchQuery);
        const videos = searchResult.videos.slice(0, 3);
        
        console.log('Found Top 3 videos:');
        videos.forEach((v, i) => console.log(`${i+1}: ${v.title} (${v.videoId})`));

        const iframes = $('iframe');
        iframes.each((i, elem) => {
            const video = videos[i % videos.length];
            if (video) {
                const embedUrl = `https://www.youtube.com/embed/${video.videoId}`;
                console.log(`Setting iframe ${i} src to: ${embedUrl}`);
                $(elem).attr('src', embedUrl);
            }
        });

        // Write to a temporary file for verification
        const outputPath = path.join(__dirname, 'test_output.html');
        fs.writeFileSync(outputPath, $.html(), 'utf-8');
        console.log(`Done. Saved to ${outputPath}`);

    } catch (e) {
        console.error(`Error: ${e.message}`);
    }
}

test();
