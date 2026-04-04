/* ================================================
   POSTS DATA - Illusionist Blog
   ================================================ */

const POSTS = [
  {
    id: "the-pledge-misdirection",
    title: "The Pledge: 미스디렉션의 기술",
    excerpt: "관객의 시선을 자유롭게 조종하는 미스디렉션(Misdirection)의 핵심 원리와 실전 테크닉을 알아봅니다.",
    category: "미스디렉션",
    date: "2026-04-01",
    readTime: "8분",
    image: null,
    content: `
      <h2>미스디렉션이란?</h2>
      <p>미스디렉션(Misdirection)은 마술의 가장 근본적인 원리 중 하나입니다. 단어 그대로 <strong>'잘못된 방향으로 이끄는 것'</strong>을 의미하며, 관객의 주의를 마술사가 원하는 곳으로 유도하는 기술입니다.</p>

      <blockquote>"The true secret of magic lies not in the trick itself, but in the direction of the audience's attention." — Jean Eugène Robert-Houdin</blockquote>

      <h2>미스디렉션의 3가지 유형</h2>

      <h3>1. 물리적 미스디렉션 (Physical Misdirection)</h3>
      <p>마술사의 <em>몸짓, 시선, 손동작</em>을 통해 관객의 눈을 특정 방향으로 유도합니다.</p>
      <ul>
        <li>마술사가 바라보는 곳을 관객도 함께 바라봅니다</li>
        <li>큰 동작은 작은 동작을 가려줍니다</li>
      </ul>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/VPJfcX7gOyI?start=500" title="Misdirection Video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>

      <h3>2. 심리적 미스디렉션 (Psychological Misdirection)</h3>
      <p>관객의 <em>사고 과정 자체</em>를 조종합니다.</p>

      <h3>3. 시간적 미스디렉션 (Temporal Misdirection)</h3>
      <p>비밀 동작이 일어나는 시점을 관객이 예상하지 못한 순간으로 옮기는 기술입니다.</p>

      <blockquote>미스디렉션은 속이는 것이 아니라, 더 아름다운 경험을 선사하기 위한 배려입니다.</blockquote>
    `
  },
  {
    id: "card-magic-basics",
    title: "카드 마술의 기본: 더블 리프트",
    excerpt: "카드 마술의 필수 기법인 더블 리프트(Double Lift)를 처음부터 단계별로 배워봅니다.",
    category: "카드마술",
    date: "2026-03-28",
    readTime: "12분",
    image: null,
    content: `
      <h2>더블 리프트(Double Lift)란?</h2>
      <p>더블 리프트는 덱 위에서 <strong>두 장의 카드를 한 장처럼 들어 보여주는 기법</strong>입니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/Gjd4EDm3EWU" title="Card Magic Video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
    `
  },
  {
    id: "coin-magic-basics",
    title: "코인 마술 기초: 클래식 팜",
    excerpt: "동전을 손바닥에 숨기는 가장 기본적인 기법, 클래식 팜(Classic Palm)을 마스터해봅시다.",
    category: "코인마술",
    date: "2026-04-03",
    readTime: "10분",
    image: null,
    content: `
      <h2>클래식 팜(Classic Palm)이란?</h2>
      <p>동전을 손바닥 근육으로 고정하는 기초 기법입니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/VPJfcX7gOyI?start=10" title="Coin Magic Video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
    `
  },
  {
    id: "stage-presence",
    title: "무대 위의 존재감: 쇼맨십의 비밀",
    excerpt: "관객을 사로잡는 무대 존재감을 만드는 쇼맨십 기법을 배워봅니다.",
    category: "쇼맨십",
    date: "2026-03-20",
    readTime: "10분",
    image: null,
    content: `
      <h2>쇼맨십의 중요성</h2>
      <p>마술은 트릭이 아니라 퍼포먼스입니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/k45_1yHh9L0" title="Showmanship Video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
    `
  },
  {
    id: "mentalism-basics",
    title: "멘탈리즘 기초: 콜드 리딩",
    excerpt: "상대방의 마음을 읽는 척하는 심리 기술, 콜드 리딩의 기초를 알아봅니다.",
    category: "멘탈리즘",
    date: "2026-03-15",
    readTime: "9분",
    image: null,
    content: `
      <h2>콜드 리딩이란?</h2>
      <p>상대방의 반응을 보고 정보를 추론해내는 기술입니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/1vGhzZfXqC8" title="Mentalism Video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
    `
  },
  {
    id: "stage-illusion-levitation",
    title: "스테이지 일루전: 공중 부양",
    excerpt: "중력을 거스르는 듯한 무대 마술의 비밀을 파헤쳐 봅니다.",
    category: "스테이지 일루전",
    date: "2026-03-10",
    readTime: "11분",
    image: null,
    content: `
      <h2>공중 부양의 원리</h2>
      <p>무대 장치와 시각적 조절을 이용한 마술입니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/vW1Q6S4v0Z4" title="Illusion Video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
    `
  },
  {
    id: "magic-history",
    title: "마술 역사: 로베르 우댕",
    excerpt: "현대 마술의 아버지라고 불리는 로베르 우댕의 일생을 살펴봅니다.",
    category: "마술 역사",
    date: "2026-03-05",
    readTime: "15분",
    image: null,
    content: `
      <h2>로베르 우댕의 업적</h2>
      <p>마술을 예술의 경지로 끌어올린 인물입니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/k45_1yHh9L0" title="History Video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
    `
  },
  {
    id: "sleight-of-hand-palm",
    title: "슬레이트 오브 핸드: 기초 팜",
    excerpt: "손놀림의 정수, 다양한 팜 기술을 마스터해 봅니다.",
    category: "슬레이트 오브 핸드",
    date: "2026-03-01",
    readTime: "13분",
    image: null,
    content: `
      <h2>팜 기술의 기초</h2>
      <p>손안에 물건을 숨기는 기술입니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/y5jU-9nE-vQ" title="Hand Video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
    `
  }
];

// Get all unique categories
function getCategories() {
  const cats = new Set();
  POSTS.forEach(p => cats.add(p.category));
  return ['전체', ...Array.from(cats)];
}

// Get post by ID
function getPostById(id) {
  return POSTS.find(p => p.id === id) || null;
}

// Get posts filtered by category
function getPostsByCategory(category) {
  if (!category || category === '전체') return POSTS;
  return POSTS.filter(p => p.category === category);
}

// Get adjacent posts for navigation
function getAdjacentPosts(currentId) {
  const idx = POSTS.findIndex(p => p.id === currentId);
  return {
    prev: idx < POSTS.length - 1 ? POSTS[idx + 1] : null,
    next: idx > 0 ? POSTS[idx - 1] : null
  };
}

// Format date to Korean style
function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}
