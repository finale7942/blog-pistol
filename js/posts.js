/* ================================================
   POSTS DATA - Illusionist Blog
   ================================================ */

const POSTS = [
  {
    id: "the-pledge-misdirection",
    title: "The Pledge: 미스디렉션의 기술",
    excerpt: "관객의 시선을 자유롭게 조종하는 미스디렉션(Misdirection)의 핵심 원리와 실전 테크닉을 알아봅니다.",
    category: "기초이론",
    date: "2026-04-01",
    readTime: "8분",
    image: null,
    content: `
      <h2>미스디렉션이란?</h2>
      <p>미스디렉션(Misdirection)은 마술의 가장 근본적인 원리 중 하나입니다. 단어 그대로 <strong>'잘못된 방향으로 이끄는 것'</strong>을 의미하며, 관객의 주의를 마술사가 원하는 곳으로 유도하는 기술입니다.</p>

      <blockquote>"The true secret of magic lies not in the trick itself, but in the direction of the audience's attention." — Jean Eugène Robert-Houdin</blockquote>

      <h2>미스디렉션의 3가지 유형</h2>

      <h3>1. 물리적 미스디렉션 (Physical Misdirection)</h3>
      <p>마술사의 <em>몸짓, 시선, 손동작</em>을 통해 관객의 눈을 특정 방향으로 유도합니다. 가장 기본적이면서도 강력한 형태의 미스디렉션입니다.</p>
      <ul>
        <li>마술사가 바라보는 곳을 관객도 함께 바라봅니다</li>
        <li>큰 동작은 작은 동작을 가려줍니다</li>
        <li>움직이는 물체는 정지한 물체보다 주의를 끕니다</li>
      </ul>

      <h3>2. 심리적 미스디렉션 (Psychological Misdirection)</h3>
      <p>관객의 <em>사고 과정 자체</em>를 조종합니다. 관객이 특정 가정을 하도록 유도하거나, 중요한 순간에 다른 생각을 하게 만듭니다.</p>
      <ul>
        <li>타이밍: 비밀 동작과 효과 사이에 시간 차를 둡니다</li>
        <li>패턴 형성: 반복을 통해 예상을 만든 뒤 깨뜨립니다</li>
        <li>프레이밍: 상황을 특정 관점으로 해석하게 만듭니다</li>
      </ul>

      <h3>3. 시간적 미스디렉션 (Temporal Misdirection)</h3>
      <p>비밀 동작(secret move)이 일어나는 <strong>시점</strong>을 관객이 예상하지 못하는 순간으로 옮기는 기술입니다. 대부분의 관객은 "마술이 일어나는 순간"에만 집중하기 때문에, 그 전후에 비밀 동작을 수행하면 발각되지 않습니다.</p>

      <h2>실전 연습 포인트</h2>
      <ol>
        <li>거울 앞에서 본인의 시선 방향을 체크하세요</li>
        <li>관객 역할을 할 친구에게 "어디를 봤는지" 물어보세요</li>
        <li>영상으로 촬영하여 자연스러움을 확인하세요</li>
        <li>일상 대화에서도 자연스러운 제스처를 연습하세요</li>
      </ol>

      <blockquote>미스디렉션은 속이는 것이 아닙니다. 관객에게 더 아름다운 경험을 선사하기 위한 도구입니다. ✦</blockquote>
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
      <p>더블 리프트는 덱(카드 뭉치) 위에서 <strong>두 장의 카드를 한 장처럼 들어 보여주는 기법</strong>입니다. 카드 마술에서 가장 많이 사용되는 비밀 기법(sleight) 중 하나로, 이것만 완벽하게 익혀도 수십 가지 마술을 할 수 있습니다.</p>

      <h2>준비물</h2>
      <ul>
        <li>바이시클(Bicycle) 카드 한 벌 (새 카드 권장)</li>
        <li>깨끗하고 평평한 테이블</li>
        <li>연습용 거울</li>
      </ul>

      <h2>단계별 학습</h2>

      <h3>Step 1: 핑키 브레이크 (Pinky Break)</h3>
      <p>더블 리프트를 하기 위해서는 먼저 <em>두 장의 카드 아래에 새끼손가락으로 틈(break)을 유지</em>하는 기술이 필요합니다.</p>
      <ol>
        <li>왼손으로 덱을 딜링 포지션(Dealing Position)에 잡습니다</li>
        <li>오른손 엄지로 덱 뒤쪽 끝(back edge)에서 카드 두 장을 살짝 들어올립니다</li>
        <li>왼손 새끼손가락 끝을 그 틈에 살짝 끼워 유지합니다</li>
        <li>이 상태가 외부에서 보이면 안 됩니다</li>
      </ol>

      <h3>Step 2: 턴오버 (Turnover)</h3>
      <p>브레이크 위의 두 장을 <strong>한 장처럼 자연스럽게 뒤집어</strong> 보여줍니다.</p>
      <ol>
        <li>오른손 엄지와 중지로 브레이크 위의 두 장을 잡습니다</li>
        <li>손목을 돌려 카드를 뒤집으며 덱 위에 놓습니다</li>
        <li>관객에게 "이것이 당신의 카드입니다"라고 보여줍니다</li>
        <li>다시 뒤집어 놓으면 진짜 맨 위 카드는 관객이 본 카드가 아닙니다</li>
      </ol>

      <h3>Step 3: 자연스러움의 완성</h3>
      <p>기술적으로 할 수 있는 것과 관객 앞에서 사용할 수 있는 것은 다릅니다. 아래 포인트를 반드시 체크하세요:</p>
      <ul>
        <li><strong>소리</strong>: 두 장이 "딸깍" 소리가 나면 안 됩니다</li>
        <li><strong>두께</strong>: 카드를 정면에서 보여주지 마세요</li>
        <li><strong>속도</strong>: 한 장 넘길 때와 같은 속도로 하세요</li>
        <li><strong>시선</strong>: 카드가 아닌 관객을 보면서 하세요</li>
      </ul>

      <blockquote>"연습은 완벽을 만들지 않습니다. 완벽한 연습이 완벽을 만듭니다." — 카드 마술의 格言</blockquote>
    `
  },
  {
    id: "stage-presence",
    title: "무대 위의 존재감: 쇼맨십의 비밀",
    excerpt: "같은 트릭이라도 퍼포먼스에 따라 천지차이. 관객을 사로잡는 무대 존재감을 만드는 방법을 공유합니다.",
    category: "퍼포먼스",
    date: "2026-03-20",
    readTime: "10분",
    image: null,
    content: `
      <h2>쇼맨십이 중요한 이유</h2>
      <p>많은 사람들이 마술의 핵심이 <em>"트릭의 비밀"</em>에 있다고 생각하지만, 실제로 관객의 기억에 남는 것은 <strong>퍼포먼스의 질</strong>입니다. 같은 트릭을 해도 어떤 마술사는 경이로운 경험을 선사하고, 어떤 마술사는 "아, 그렇구나" 정도의 반응만 얻습니다.</p>

      <h2>존재감을 만드는 5가지 요소</h2>

      <h3>1. 자세와 움직임</h3>
      <p>무대 위에서의 자세는 관객이 당신을 어떻게 인식하는지를 결정합니다.</p>
      <ul>
        <li>등을 펴고 어깨를 자연스럽게 내립니다</li>
        <li>움직임에는 명확한 의도가 있어야 합니다</li>
        <li>불필요한 움직임(fidgeting)을 제거합니다</li>
      </ul>

      <h3>2. 시선 컨트롤</h3>
      <p>눈은 감정을 전달하는 가장 강력한 도구입니다. 관객 개개인과 눈을 맞추되, 한 사람에게 너무 오래 머물지 마세요.</p>

      <h3>3. 목소리와 페이싱</h3>
      <p>마술의 클라이맥스에서는 잠시 <strong>침묵</strong>을 사용하세요. 긴장감을 극대화하는 가장 효과적인 방법입니다.</p>
      <ul>
        <li>중요한 순간 전에 2-3초의 멈춤을 줍니다</li>
        <li>톤의 변화로 이야기의 흐름을 만듭니다</li>
        <li>속삭임과 강조를 적절히 섞습니다</li>
      </ul>

      <h3>4. 스크립트와 스토리</h3>
      <p>모든 훌륭한 마술 루틴에는 <em>이야기</em>가 있습니다. "카드를 골라주세요"보다 "19세기 파리의 한 도박사가 있었습니다..."로 시작하는 것이 훨씬 몰입감을 줍니다.</p>

      <h3>5. 실패에 대한 대처</h3>
      <p>무대에서 실수는 반드시 일어납니다. 중요한 것은 관객이 눈치채지 못하게 자연스럽게 넘어가는 것입니다.</p>
      <ul>
        <li>항상 Plan B를 준비합니다</li>
        <li>유머로 전환하는 능력을 기릅니다</li>
        <li>동요하지 않는 표정을 연습합니다</li>
      </ul>

      <blockquote>"마술사는 배우가 마술사를 연기하는 것이다." — Jean Eugène Robert-Houdin</blockquote>
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
