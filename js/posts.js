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

      <h2>준비물</h2>
      <ul>
        <li>거울 (본인의 시선 체크용)</li>
        <li>연습용 카드 또는 동전</li>
      </ul>

      <h2>단계별 학습</h2>

      <h3>Step 1: 물리적 미스디렉션</h3>
      <p>마술사의 몸짓과 시선을 통해 관객의 눈을 특정 방향으로 유도합니다.</p>
      <ol>
        <li>마술사가 강력하게 쳐다보는 곳을 관객도 함께 바라보게 됩니다.</li>
        <li>큰 동작은 작은 비밀 동작을 완벽하게 가려줍니다.</li>
      </ol>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/VPJfcX7gOyI?start=500" title="Misdirection Guide" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
      <p style="text-align: center; margin-bottom: 2.5rem; font-size: 0.85rem;">
        <a href="https://www.youtube.com/watch?v=VPJfcX7gOyI&t=500s" target="_blank" style="color: var(--clr-accent-gold); text-decoration: underline;">👉 유튜브 원본 영상 페이지로 직접 이동해서 보기</a>
      </p>

      <h3>Step 2: 심리적 미스디렉션</h3>
      <p>관객의 사고 과정을 조종하여 마술이 일어나는 순간을 인지하지 못하게 합니다.</p>

      <h3>Step 3: 시간적 미스디렉션</h3>
      <p>비밀 동작과 효과 사이에 시간 차를 두어 인과관계를 흐리게 만듭니다.</p>

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
      <p>더블 리프트는 덱 위에서 <strong>두 장의 카드를 한 장으로 보이게끔 들어올리는 기법</strong>입니다.</p>

      <h2>준비물</h2>
      <ul>
        <li>바이시클 카드 한 벌</li>
        <li>연습용 거울</li>
      </ul>

      <h2>단계별 학습</h2>

      <h3>Step 1: 핑키 브레이크</h3>
      <p>두 장의 카드 아래에 몰래 틈을 만드는 기법입니다.</p>
      <ol>
        <li>오른손 엄지로 카드 두 장을 살짝 들어올립니다.</li>
        <li>왼손 새끼손가락을 틈 사이에 끼웁니다.</li>
      </ol>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/Gjd4EDm3EWU" title="Double Lift Guide" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
      <p style="text-align: center; margin-bottom: 2.5rem; font-size: 0.85rem;">
        <a href="https://www.youtube.com/watch?v=Gjd4EDm3EWU" target="_blank" style="color: var(--clr-accent-gold); text-decoration: underline;">👉 유튜브 원본 영상 페이지로 직접 이동해서 보기</a>
      </p>

      <h3>Step 2: 자연스러운 턴오버</h3>
      <p>두 장을 한 장처럼 뒤집어 관객에게 보여줍니다.</p>

      <h3>Step 3: 마무리 정렬</h3>
      <p>카드를 원위치 시킬 때 어긋나지 않도록 주의합니다.</p>

      <blockquote>연습은 배신하지 않습니다. 완벽한 연습만이 완벽을 만듭니다.</blockquote>
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
      <p>손바닥 중앙의 근육을 이용해 <strong>동전이 떨어지지 않게 고정</strong>하는 핵심 기초 기법입니다.</p>

      <h2>준비물</h2>
      <ul>
        <li>하프 달러 또는 500원 동전</li>
      </ul>

      <h2>단계별 학습</h2>

      <h3>Step 1: 고정 위치 찾기</h3>
      <p>엄지 근육과 새끼손가락 쪽 근육 사이의 최적의 지점을 찾습니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/VPJfcX7gOyI?start=10" title="Coin Magic Guide" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
      <p style="text-align: center; margin-bottom: 2.5rem; font-size: 0.85rem;">
        <a href="https://www.youtube.com/watch?v=VPJfcX7gOyI&t=10s" target="_blank" style="color: var(--clr-accent-gold); text-decoration: underline;">👉 유튜브 원본 영상 페이지로 직접 이동해서 보기</a>
      </p>

      <h3>Step 2: 이완된 상태 유지</h3>
      <p>팜을 한 상태에서도 손가락을 자유롭게 움직일 수 있어야 합니다.</p>

      <h3>Step 3: 물건 잡기 연습</h3>
      <p>팜을 유지하며 일상의 물건을 자연스럽게 쥐어봅니다.</p>

      <blockquote>손바닥의 여백이 마법을 완성합니다.</blockquote>
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
      <h2>쇼맨십의 핵심</h2>
      <p>마술은 보여주는 것이 아니라, <strong>관객과 함께 경험하는 것</strong>입니다.</p>

      <h2>단계별 학습</h2>

      <h3>Step 1: 당당한 자세</h3>
      <p>어깨를 펴고 무대 위에서 당당한 포즈를 취합니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/B_975T5C3bM" title="Showmanship Guide" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allowfullscreen></iframe>
      </div>
      <p style="text-align: center; margin-bottom: 2.5rem; font-size: 0.85rem;">
        <a href="https://www.youtube.com/watch?v=B_975T5C3bM" target="_blank" style="color: var(--clr-accent-gold); text-decoration: underline;">👉 유튜브 원본 영상 페이지로 직접 이동해서 보기</a>
      </p>

      <h3>Step 2: 시선의 분배</h3>
      <p>관객 전체를 한 명씩 훑어보며 교감합니다.</p>

      <h3>Step 3: 호흡 조절</h3>
      <p>긴장감을 주기 위해 침묵을 활용하는 법을 배웁니다.</p>

      <blockquote>마술사는 마술사를 연기하는 배우입니다.</blockquote>
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
      <h2>콜드 리딩의 기초</h2>
      <p>비언어적 신호를 분석하여 상대방을 꿰뚫어보는 듯한 인상을 주는 기술입니다.</p>

      <h2>단계별 학습</h2>

      <h3>Step 1: 바넘 효과 이해</h3>
      <p>누구나 공감할 보편적 이야기를 자신 있게 전달합니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/G62H0lq_wxs" title="Mentalism Guide" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p style="text-align: center; margin-bottom: 2.5rem; font-size: 0.85rem;">
        <a href="https://www.youtube.com/watch?v=G62H0lq_wxs" target="_blank" style="color: var(--clr-accent-gold); text-decoration: underline;">👉 유튜브 원본 영상 페이지로 직접 이동해서 보기</a>
      </p>

      <h3>Step 2: 관찰과 피드백</h3>
      <p>말의 반응을 관찰하고 즉각적으로 문장을 수정합니다.</p>

      <h3>Step 3: 확신의 말투</h3>
      <p>모든 추론을 단정적이고 자신감 있게 말합니다.</p>

      <blockquote>심리학은 마술의 가장 강력한 무기입니다.</blockquote>
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
      <h2>공중 부양의 미학</h2>
      <p>시각적 인지를 뒤흔드는 스테이지 일루전의 핵심 원리를 알아봅니다.</p>

      <h2>단계별 학습</h2>

      <h3>Step 1: 기계적 원리</h3>
      <p>와이어나 지지대가 조명에 반사되지 않도록 은폐하는 것이 중요합니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/vp9S-u-8Nlo" title="Illusion Guide" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p style="text-align: center; margin-bottom: 2.5rem; font-size: 0.85rem;">
        <a href="https://www.youtube.com/watch?v=vp9S-u-8Nlo" target="_blank" style="color: var(--clr-accent-gold); text-decoration: underline;">👉 유튜브 원본 영상 페이지로 직접 이동해서 보기</a>
      </p>

      <h3>Step 2: 감정적 부양</h3>
      <p>떠오를 때 마술사의 눈빛에서 무게감이 사라지는 연기를 합니다.</p>

      <blockquote>중력은 무대 뒤에서 숨을 죽입니다.</blockquote>
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
      <h2>근대 마술의 선구자</h2>
      <p>마술을 단순한 속임수에서 예술로 승화시킨 로베르 우댕의 일대기입니다.</p>

      <h2>단계별 학습</h2>

      <h3>Step 1: 시계공의 섬세함</h3>
      <p>정교한 기계 장치인 오토마타를 마술에 도입했습니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/7gU4vNbe1y8" title="History Guide" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p style="text-align: center; margin-bottom: 2.5rem; font-size: 0.85rem;">
        <a href="https://www.youtube.com/watch?v=7gU4vNbe1y8" target="_blank" style="color: var(--clr-accent-gold); text-decoration: underline;">👉 유튜브 원본 영상 페이지로 직접 이동해서 보기</a>
      </p>

      <h3>Step 2: 복장의 현대화</h3>
      <p>우아한 연미복을 마술사의 상징으로 만들었습니다.</p>

      <blockquote>마술의 역사는 우댕 이전과 이후로 나뉩니다.</blockquote>
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
      <h2>손안의 환상</h2>
      <p>물건을 몰래 숨기는 팜 기법은 모든 핸들링 마술의 시작입니다.</p>

      <h2>단계별 학습</h2>

      <h3>Step 1: 손 모양의 이완</h3>
      <p>무언가를 쥐고 있어도 손가락이 굳어 보이면 안 됩니다.</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 1.5rem 0; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
        <iframe src="https://www.youtube.com/embed/Gf7XW0S_d14" title="Hand Guide" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p style="text-align: center; margin-bottom: 2.5rem; font-size: 0.85rem;">
        <a href="https://www.youtube.com/watch?v=Gf7XW0S_d14" target="_blank" style="color: var(--clr-accent-gold); text-decoration: underline;">👉 유튜브 원본 영상 페이지로 직접 이동해서 보기</a>
      </p>

      <h3>Step 2: 앵글 제어</h3>
      <p>관객의 시야 각도에 따라 손의 위치를 미세하게 조정합니다.</p>

      <blockquote>마법은 당신의 손가락 끝에서 시작됩니다.</blockquote>
    `
  }
];

// Essential functions
function getCategories() {
  const cats = new Set();
  POSTS.forEach(p => cats.add(p.category));
  return ['전체', ...Array.from(cats)];
}
function getPostById(id) { return POSTS.find(p => p.id === id) || null; }
function getPostsByCategory(category) {
  if (!category || category === '전체') return POSTS;
  return POSTS.filter(p => p.category === category);
}

// Fixed Adjacent Posts Logic (Swapped to match user expectation)
function getAdjacentPosts(currentId) {
  const idx = POSTS.findIndex(p => p.id === currentId);
  return {
    next: idx < POSTS.length - 1 ? POSTS[idx + 1] : null, // Swapped: next is older
    prev: idx > 0 ? POSTS[idx - 1] : null                // Swapped: prev is newer
  };
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`;
}
