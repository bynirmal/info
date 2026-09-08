/* ===========================
   BALA AKSHARAM — App Logic
   =========================== */

// ───── A-Z Data ─────
const ALPHABET = [
  { letter:"A", word:"Ayodhya",         telugu:"అయోధ్య",          desc:"The sacred city of Lord Rama, capital of the Kosala kingdom, where Rama was born and later returned to rule after defeating Ravana.",                                   cat:"Places",          colors:["#FF8C42","#FF0080"] },
  { letter:"B", word:"Balaramudu",       telugu:"బలరాముడు",         desc:"The strong elder brother of Krishna, known for his extraordinary strength, love for agriculture, and devotion to dharma.",                                                 cat:"Characters",      colors:["#42A5F5","#80CBC4"] },
  { letter:"C", word:"Chakra",          telugu:"చక్రం",            desc:"The divine discus weapon of Lord Vishnu used to protect dharma and destroy evil forces throughout the universe.",                                                            cat:"Objects",          colors:["#26A69A","#80DEEA"] },
  { letter:"D", word:"Dasharatha",      telugu:"దశరథ",            desc:"The noble King of Ayodhya and father of Lord Rama, famous for his unwavering justice and his tragic exile of his beloved son.",                                            cat:"Characters",      colors:["#AB47BC","#CE93D8"] },
  { letter:"E", word:"Ekaadasi",        telugu:"ఏకాదశీ",           desc:"The sacred 11th day of each moon cycle, dedicated to Lord Vishnu for spiritual growth and purification.",                                                                   cat:"Spirituality",    colors:["#66BB6A","#AED581"] },
  { letter:"F", word:"Flute",           telugu:"వెణ cords",       desc:"The divine bamboo flute played by Lord Krishna that enchants all of creation with its melodious, divine sound.",                                                           cat:"Objects",          colors:["#8D6E63","#BCAAA4"] },
  { letter:"G", word:"Ganga",           telugu:"గంగ",             desc:"The sacred River Ganga, the holiest river in Hinduism that purifies all sins and grants liberation to all souls.",                                                          cat:"Places",          colors:["#29B6F6","#81D4FA"] },
  { letter:"H", word:"Hanuman",         telugu:"హనుమాన్",          desc:"The divine monkey god, greatest devotee of Lord Rama, who crossed the ocean and brought the Sanjeevani mountain to save Lakshmana.",                                         cat:"Characters",      colors:["#EF5350","#EF9A9A"] },
  { letter:"I", word:"Indra",           telugu:"ఇంద్ర",            desc:"The king of gods and lord of the heavens, wielder of thunderbolt and commander of the divine forces.",                                                                     cat:"Deities",          colors:["#5C6BC0","#9FA8DA"] },
  { letter:"J", word:"Jagannatha",      telugu:"జగన్నాథ",           desc:"The Lord of the Universe, the presiding deity of Puri, worshipped with great devotion across India.",                                                                      cat:"Deities",          colors:["#FFA726","#FFB74D"] },
  { letter:"K", word:"Krishna",         telugu:"కృష్ణ",           desc:"The eighth avatar of Lord Vishnu, teacher of the Bhagavad Gita, known for his divine childhood leelas and wisdom.",                                                        cat:"Characters",      colors:["#26C6DA","#4DD0E1"] },
  { letter:"L", word:"Lakshmana",       telugu:"లక్ష్మణ",          desc:"The loyal younger brother of Lord Rama who accompanied him to the forest for 14 years without hesitation.",                                                                 cat:"Characters",      colors:["#7986CB","#9FA8DA"] },
  { letter:"M", word:"Maya",            telugu:"మాయ",             desc:"The divine illusion created by the gods to teach important spiritual lessons and guide souls toward enlightenment.",                                                       cat:"Spirituality",    colors:["#4DB6AC","#80CBC4"] },
  { letter:"N", word:"Narasimha",       telugu:"నరసింహ",           desc:"The half-lion half-man avatar of Lord Vishnu who protected his devotee Prahlada from the demon Hiranyakashipu.",                                                            cat:"Deities",          colors:["#FF8A65","#FFAB91"] },
  { letter:"O", word:"Omkaara",         telugu:"ఓంకార",            desc:"The sacred sound Om, the primordial cosmic vibration that represents the essence of the entire universe and divine consciousness.",                                        cat:"Spirituality",    colors:["#9575CD","#B39DD8"] },
  { letter:"P", word:"Parvathi",        telugu:"పార్వతి",          desc:"The divine mother goddess, daughter of the Himalayas, wife of Lord Shiva, and the symbol of divine feminine power.",                                                       cat:"Deities",          colors:["#F06292","#F48FB1"] },
  { letter:"Q", word:"Quasar",          telugu:"క్వాసార్",           desc:"Ancient Indian scholars observed distant luminous objects in the skies — cosmic wonders of the universe that fill us with awe.",                                               cat:"Science",          colors:["#4DD0E1","#80DEEA"] },
  { letter:"R", word:"Ramayana",        telugu:"రామాయణం",           desc:"The ancient epic poem by Sage Valmiki that tells the divine story of Lord Rama, one of the greatest stories ever told.",                                                    cat:"Sacred Texts",    colors:["#EC407A","#F06292"] },
  { letter:"S", word:"Saraswathi",      telugu:"సరస్వతి",          desc:"The goddess of knowledge, music, art, and wisdom who sits on a white lotus and blesses all true scholars and artists.",                                                     cat:"Deities",          colors:["#1E88E5","#64B5F6"] },
  { letter:"T", word:"Temple",          telugu:"దేవాలయం",           desc:"A sacred building where devotees can offer worship, pray to the gods, and experience inner peace and divine blessings.",                                                     cat:"Places",          colors:["#8D6E63","#A1887F"] },
  { letter:"U", word:"Upanishad",       telugu:"ఉపనిషత్తు",          desc:"The ancient wisdom texts that contain the deepest spiritual knowledge shared by great sages in calm forests.",                                                              cat:"Sacred Texts",    colors:["#5C6BC0","#7986CB"] },
  { letter:"V", word:"Veda",            telugu:"వేదం",             desc:"The four most ancient and sacred scriptures of Hinduism, containing hymns, rituals, and divine wisdom passed down through ages.",                                            cat:"Sacred Texts",    colors:["#FDD835","#FFFF8D"] },
  { letter:"W", word:"Warrior",         telugu:"యోధుడు",            desc:"A brave and noble fighter who stands up for what is right and protects the weak with courage and honour.",                                                                  cat:"Values",          colors:["#E53935","#EF5350"] },
  { letter:"X", word:"Xerox of Value",  telugu:"ఉంచుకోవడం",        desc:"Copying good habits and kindness from our elders and role models so we can become better people every day.",                                                                 cat:"Values",          colors:["#7E57C2","#9575CD"] },
  { letter:"Y", word:"Yoga",            telugu:"యోగ",              desc:"The ancient practice of connecting the mind, body, and spirit through postures, breathing, and meditation.",                                                                  cat:"Spirituality",    colors:["#26A69A","#80CBC4"] },
  { letter:"Z", word:"Zee — Zeal",      telugu:"ఉల్లాసం",           desc:"Enthusiasm and zeal for doing good deeds, learning new things, and helping others with a joyful heart.",                                                                     cat:"Values",          colors:["#FF7043","#FFAB91"] },
];

// ───── Stories ─────
const STORIES = [
  { id:"sita_lakshmi",   title:"Sita and the Golden Deer",     telugu:"సీత & బంగారు జింక",        minutes:5,  body:"Sita and Ram wanted a peaceful life in the forest. One day, a beautiful golden deer appeared nearby. 'Ram,' said Sita, 'please catch it for me.' So Ram followed the deer deep into the woods. But the deer was actually Ravana in disguise! While Ram chased the deer, Ravana came as an old sadhu and tricked Sita into coming with him. When Ram returned, Sita was gone. He searched everywhere and asked his dear friend Hanuman for help. Hanuman found Sita in Lanka, and saved her by flying across the ocean with his powerful wings." },
  { id:"hanuman_bridge", title:"Hanuman Builds the Ocean Bridge",telugu:"హనుమాన్ సముద్ర బ్రిడ్జ్",  minutes:6,  body:"When Ram wanted to rescue Sita from Lanka, his army faced a big ocean as a challenge. Ram asked his powerful monkeys to find a way. Hanuman had an amazing idea. He called his friends — Jambavan, Nala, and Nila. Together, they picked huge rocks and started building a bridge straight into the ocean! Every rock had Ram's name written on it. Even the ocean let the bridge stay strong. Soon, Ram's army reached Lanka, and the battle for dharma began." },
  { id:"krishna_butter", title:"Little Krishna and the Butter", telugu:"పిల్లకృష్ణ & నేయబజ్జి", minutes:4, body:"Baby Krishna loved butter more than anything! One morning, his mother Yashoda tied a bell around his neck to make sure he would not sneak out. But Krishna was too clever. He opened the window with his little toes while Yashoda was busy cooking, climbed into the neighbour's house, and ate all the butter! When Yashoda found him with butter smeared on his face, she couldn't stay angry — it was just too cute!" },
  { id:"prahlada_narsimha", title:"Prahlada and Lord Narasimha", telugu:"ప్రహ్లాద & నరసింహ", minutes:7, body:"Prahlada was the son of the demon king Hiranyakashipu. His father wanted everyone to worship him as a god and forbade Prahlada from worshipping Lord Vishnu. But Prahlada loved Vishnu so much! His father got angry and tried to hurt him many times. Once, when Prahlada was praying, Lord Vishnu appeared as Narasimha — half lion, half man — from a pillar. He saved Prahlada and showed that true devotion always wins, no matter what." },
  { id:"arjuna_gita", title:"Arjuna and the Bhagavad Gita",  telugu:"అర్జున & భగవద్గీత",     minutes:8, body:"Before the great Mahabharata war, Arjuna became sad and said, 'Krishna, I cannot fight my own family. What is the point of winning if our own people are gone?' Lord Krishna then gave Arjuna the Bhagavad Gita — the most beautiful spiritual teaching. 'Do your duty without attachment,' said Krishna. 'Act with love and devotion, and leave all results to God.' After hearing Krishna, Arjuna picked up his bow and fought for what was right." },
  { id:"sita_agni", title:"Sita's Purity Test — The Fire", telugu:"సీత అగ్ని పరీక్ష",       minutes:7, body:"After defeating Ravana and saving Sita, Ram returned to Ayodhya. But some people questioned Sita's purity during her time in Lanka. To prove her innocence, Sita agreed to walk into fire. The fire was scorching hot and could burn anything. But because Sita's heart was completely pure, the fire did not hurt her at all. Lord Agni himself appeared and said, 'Sita is pure.' The people cheered with happy tears." },
];

// ───── Quiz Questions ─────
const QUIZ = [
  { q:"Who was Lord Rama's most loyal devotee?", opts:["Hanuman","Ravana","Indrajit","Kumbhakarna"], ans:0 },
  { q:"Which avatar of Vishnu was half-lion and half-man?", opts:["Krishna","Narasimha","Vamana","Kalki"], ans:1 },
  { q:"What is the name of Lord Krishna's divine flute?", opts:["Murali","Veena","Flute","Santoor"], ans:0 },
  { q:"Who wrote the Ramayana?", opts:["Kalidasa","Valmiki","Veda Vyasa","Tulsidas"], ans:1 },
  { q:"What sacred river is believed to cleanse all sins?", opts:["Yamuna","Godavari","Ganga","Saraswati"], ans:2 },
  { q:"Who is the goddess of knowledge, music, and wisdom?", opts:["Lakshmi","Parvathi","Saraswathi","Durga"], ans:2 },
  { q:"What did Hanuman bring from the Himalayas to save Lakshmana?", opts:["Fruit","Sanjeevani herb/mountain","Water","Fire"], ans:1 },
  { q:"What city was the capital of Lord Rama's kingdom?", opts:["Mathura","Ayodhya","Dwarka","Kashi"], ans:1 },
  { q:"What is the sacred 11th day of the lunar cycle called?", opts:["Pongal","Ekaadasi","Dussehra","Diwali"], ans:1 },
  { q:"What represents the primordial cosmic sound of the universe?", opts:["Amen","Om","Allah","Om Namah Shivaya"], ans:1 },
  { q:"Who was the brave servant of Rama who built the ocean bridge?", opts:["Sugriva","Hanuman","Bali","Jambavan"], ans:0 },
  { q:"Which divine weapon did Lord Vishnu wield to protect dharma?", opts:["Trident","Bow and Arrow","Chakra (Discus)","Sword"], ans:2 },
  { q:"What ancient text contains Lord Krishna's teachings to Arjuna?", opts:["Ramayana","Bhagavad Gita","Upanishads","Vedas"], ans:1 },
  { q:"Who was Krishna's brother — a great warrior who loved farming?", opts:["Balaramudu","Ganesh","Arjuna","Karna"], ans:0 },
  { q:"How many years was Lord Rama in exile in the forest?", opts:["10 years","12 years","14 years","16 years"], ans:2 },
];

// ───── Daily Quotes ─────
const QUOTES = [
  "Be brave like Hanuman and stand up for what is good and true.",
  "Kindness is the light that brightens every heart.",
  "Learn something new every day like young Krishna.",
  "Do your duty with love, as Arjuna learned from Lord Krishna.",
  "A pure heart and honest words are more powerful than any magic.",
  "Be grateful for everything you have, just like Sita was grateful to the forest.",
  "Listen to your parents — they are your first teachers.",
  "Dream big with divine faith, just as little Krishna dreamed of uplifting all beings.",
  "Do good without expecting anything — karma always returns.",
  "Be as loving as Mother Parvathi, who always protect her children.",
  "Always speak the truth — that is the greatest strength any warrior can have.",
  "Share your food, toys, and love with others.",
  "Respect everyone, from the ant to the elephant, child to king.",
  "When you feel sad, whisper Lord Ram's name and feel His warmth.",
];

// ───── Badges ─────
const BADGES = [
  { icon:"🕉️", label:"First Rishi",   desc:"Complete your first alphabet", earned:true },
  { icon:"📖", label:"Story Teller",   desc:"Read 5 stories",              earned:true },
  { icon:"🧮", label:"Quiz Master",    desc:"Score 10/10 in quiz",         earned:false },
  { icon:"🧩", label:"Puzzle Pro",     desc:"Solve 5 puzzles",             earned:true },
  { icon:"🌅", label:"7-Day Shield",   desc:"Practice for 7 days straight",earned:true },
  { icon:"🔥", label:"Dharma Star",    desc:"Earn 500 total stars",        earned:false },
  { icon:"🙏", label:"Humble Heart",   desc:"Show kindness in quiz",       earned:true },
  { icon:"🪷", label:"Sacred Completion", desc:"Learn all 26 alphabets",   earned:false },
];

// ───── Languages ─────
const LANGUAGES = [
  { name:"English", code:"en", flag:"🇬🇧", selected:true },
  { name:"Telugu",  code:"te", flag:"🇮🇳", selected:false },
  { name:"Hindi",   code:"hi", flag:"🇮🇳", selected:false },
  { name:"Tamil",   code:"ta", flag:"🇮🇳", selected:false },
  { name:"Bengali", code:"bn", flag:"🇮🇳", selected:false },
  { name:"Gujarati",code:"gu", flag:"🇮🇳", selected:false },
];

// ───── State ─────
let currentScreen = "splash";
let navHistory = ["splash"];
let quizState   = "welcome"; // welcome | playing | finished
let quizIndex   = 0;
let quizScore   = 0;
let quizOrder   = [];
let quizSelected = -1;
let quizAnswered = false;
let quizCorrect  = false;
let puzzleMoves  = 0;
let puzzleSolved = false;
let puzzleTiles  = [];
let memoryCards  = [];
let memoryFlipped= [];
let memoryMoves  = 0;
let memoryMatchedPairs = 0;
let memoryLocked = false;
let quoteIndex   = 0;
let completedLetters = new Set();

// ───── Init ─────
window.addEventListener("DOMContentLoaded", () => {
  buildAlphabetHome();
  buildAZDetail();
  buildStories();
  buildStoryDetail();
  buildQuiz();
  buildPuzzle();
  buildMemory();
  buildRewards();
  buildLanguage();
  buildHomeQuote();

  // Splash → home after 2.5s
  setTimeout(() => navigate("home"), 2800);
});

// ───── Navigation ─────
function navigate(screenId) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById(screenId + "-screen");
  if (el) {
    el.classList.add("active");
    currentScreen = screenId;
    navHistory.push(screenId);
  }
}
function goBack() {
  if (navHistory.length > 1) {
    navHistory.pop();
  }
  const prev = navHistory.length > 0 ? navHistory[navHistory.length - 1] : "home";
  navigate(prev);
}

// ─────────────────────────────────────────────
//  SPLASH — no JS needed, handled by CSS + setTimeout
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
//  HOME
// ─────────────────────────────────────────────
function buildAlphabetHome() {
  const grid = document.getElementById("alphabet-grid");
  grid.innerHTML = "";
  ALPHABET.forEach(a => {
    const div = document.createElement("div");
    div.className = "az-tile";
    div.style.background = `linear-gradient(135deg, ${a.colors[0]}, ${a.colors[1]})`;
    div.textContent = a.letter;
    div.onclick = () => showAlphabetDetail(a);
    grid.appendChild(div);
  });
}

function buildHomeQuote() {
  document.getElementById("home-quote").textContent = QUOTES[0];
}

function buildStories() {
  const row = document.getElementById("story-row");
  row.innerHTML = "";
  const gradients = [["#F59E0B","#D97706"],["#EC4899","#F97316"],["#8D6E63","#6D4C41"]];
  const titleOnly = ["Sita & Golden Deer","Hanuman's Bridge","Little Krishna"];
  STORIES.slice(0,3).forEach((s, i) => {
    const div = document.createElement("div");
    div.className = "story-card";
    div.style.background = `linear-gradient(160deg, ${(gradients[i]||gradients[0])[0]}, ${(gradients[i]||gradients[0])[1]})`;
    div.innerHTML = `<span style="font-size:20px">📖</span>
      <p class="story-card-title" style="margin-top:8px">${titleOnly[i]}</p>`;
    div.onclick = () => showStoryDetail(s);
    row.appendChild(div);
  });
}

// ─────────────────────────────────────────────
//  A-Z ALPHABET SCREEN + DETAIL
// ─────────────────────────────────────────────
function buildAZDetail() {
  const grid = document.getElementById("az-detail-grid");
  grid.innerHTML = "";
  ALPHABET.forEach((a, i) => {
    const div = document.createElement("div");
    div.className = "az-card";
    div.style.background = `linear-gradient(135deg, ${a.colors[0]}, ${a.colors[1]})`;
    div.innerHTML = `
      <div class="az-reward">+10⭐</div>
      <div class="az-letter-circle">${a.letter}</div>
      <div class="az-word">${a.word}</div>
      <div class="az-telugu">${a.telugu}</div>
      ${completedLetters.has(a.letter) ? '<div class="az-check">✅</div>' : ''}`;
    div.onclick = () => showAlphabetDetail(a);
    grid.appendChild(div);
  });
}

function showAlphabetDetail(a) {
  document.getElementById("detail-big-letter").textContent  = a.letter;
  document.getElementById("detail-letter-title").textContent = `${a.letter} — ${a.word}`;
  document.getElementById("detail-word").textContent = a.word;
  document.getElementById("detail-telugu").textContent = a.telugu;
  document.getElementById("detail-desc").textContent = a.desc;
  document.getElementById("detail-category").innerHTML = `📑 Category: ${a.cat}`;

  const learned = completedLetters.has(a.letter);
  const btn = document.getElementById("learn-btn");
  if (learned) { btn.disabled = true; btn.textContent = "Learned ✅"; }
  else         { btn.disabled = false; btn.textContent = "Mark as Learned ✅"; }

  // Reset audio
  document.getElementById("audio-icon").textContent   = "🔊";
  document.getElementById("audio-label").textContent  = "Tap to Hear";
  window.speaking = false;

  navigate("alphabet-detail");
}

const synth = window.speechSynthesis;
function playTTS() {
  if (window.speaking) { synth.cancel(); window.speaking = false; return; }
  const word = ALPHABET.find(a => a.letter === document.getElementById("detail-big-letter").textContent.trim())?.word || "Ayodhya";
  const utter = new SpeechSynthesisUtterance(word);
  utter.rate = 0.85;
  utter.pitch = 1.1;
  utter.onstart = () => {
    document.getElementById("audio-icon").textContent  = "🗣️";
    document.getElementById("audio-label").textContent = "Speaking…";
    window.speaking = true;
  };
  utter.onend = () => {
    document.getElementById("audio-icon").textContent  = "🔊";
    document.getElementById("audio-label").textContent = "Tap to Hear";
    window.speaking = false;
  };
  synth.speak(utter);
}

function markLearned() {
  const letter = document.getElementById("detail-big-letter").textContent.trim();
  completedLetters.add(letter);
  buildAZDetail();
  const btn = document.getElementById("learn-btn");
  btn.disabled = true;
  btn.textContent = "Learned ✅";
  confettiBurst();
}

// ─────────────────────────────────────────────
//  PUZZLE
// ─────────────────────────────────────────────
function buildPuzzle() {
  const base = [0,1,2,3,4,5,6,7,'E'];
  shuffleArray(base);
  puzzleTiles = base;
  puzzleMoves = 0;
  puzzleSolved = false;
  document.getElementById("puzzle-moves").textContent = "0";
  document.getElementById("puzzle-status").textContent = "Arrange A → H";
  document.getElementById("puzzle-play-again").style.display = "none";
  renderPuzzle();
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function renderPuzzle() {
  const grid = document.getElementById("puzzle-grid");
  grid.innerHTML = "";
  const colors = ["#F97316","#EC4899","#3B82F6","#059669","#F59E0B","#8D6E63","#D2691E","#AB47BC"];
  puzzleTiles.forEach((val, idx) => {
    const el = document.createElement("div");
    el.className = "puzzle-tile" + (val === 'E' ? " empty" : "");
    if (val !== 'E') {
      el.textContent = ["A","B","C","D","E","F","G","H"][val];
      el.style.background = `linear-gradient(135deg, ${colors[val]}, ${colors[val]}cc)`;
      el.onclick = () => onPuzzleTap(idx);
    }
    grid.appendChild(el);
  });
}

function onPuzzleTap(idx) {
  const emptyIdx = puzzleTiles.indexOf('E');
  if (idx === emptyIdx || puzzleSolved) return;
  const row1 = Math.floor(idx / 3), col1 = idx % 3;
  const rowE = Math.floor(emptyIdx / 3), colE = emptyIdx % 3;
  const adj = (row1 === rowE && Math.abs(col1 - colE) === 1) || (col1 === colE && Math.abs(row1 - rowE) === 1);
  if (!adj) return;
  [puzzleTiles[emptyIdx], puzzleTiles[idx]] = [puzzleTiles[idx], puzzleTiles[emptyIdx]];
  puzzleMoves++;
  document.getElementById("puzzle-moves").textContent = puzzleMoves;
  renderPuzzle();
  if (puzzleTiles.join("") === "01234567E") {
    puzzleSolved = true;
    document.getElementById("puzzle-status").textContent = "🎉 Solved!";
    document.getElementById("puzzle-play-again").style.display = "block";
    confettiBurst();
  }
}

function resetPuzzle() { buildPuzzle(); }

// ─────────────────────────────────────────────
//  QUIZ
// ─────────────────────────────────────────────
function buildQuiz() {
  renderQuizState();
}

function renderQuizState() {
  const c = document.getElementById("quiz-content");
  if (quizState === "welcome") {
    c.innerHTML = `<div class="quiz-welcome">
      <div class="quiz-emoji">🧠</div>
      <h2>Mythology Quiz</h2>
      <p>Test your knowledge of Ramayana & Purana!<br>10 questions · Stars for every correct answer</p>
      <button class="btn-primary" style="width:auto;padding:14px 36px;font-size:17px" onclick="startQuiz()">Start Quiz →</button>
    </div>`;
  } else if (quizState === "playing") {
    renderQuizQuestion();
  } else {
    const stars = quizScore >= 9 ? "⭐⭐⭐" : quizScore >= 7 ? "⭐⭐" : quizScore >= 5 ? "⭐" : "";
    c.innerHTML = `<div class="quiz-finished ${quizScore>=7?'green':quizScore>=5?'orange':'gray'}">
      <div class="result-emoji">${stars}</div>
      <h2>${quizScore>=7?'Excellent!':quizScore>=5?'Good Try!':'Keep Practising!'}</h2>
      <p>You scored <strong>${quizScore}</strong> out of 10!</p>
      <button class="btn-primary" style="width:auto;padding:14px 36px;font-size:17px;margin-top:20px" onclick="resetQuiz()">Play Again ↺</button>
    </div>`;
  }
}

function startQuiz() {
  quizOrder = [...Array(QUIZ.length).keys()];
  shuffleArray(quizOrder);
  quizState  = "playing";
  quizIndex  = 0;
  quizScore  = 0;
  quizSelected = -1;
  quizAnswered = false;
  quizCorrect  = false;
  renderQuizState();
}

function renderQuizQuestion() {
  const q = QUIZ[quizOrder[quizIndex]];
  const pct = ((quizIndex + 1) / Math.min(10, QUIZ.length)) * 100;

  const c = document.getElementById("quiz-content");
  c.innerHTML = `
    <div class="quiz-progress" style="margin-bottom:8px">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="quiz-q-meta" style="margin-bottom:14px">
      <span>Q ${quizIndex+1}/${Math.min(10, QUIZ.length)}</span>
      <span class="quiz-score-badge">Score: ${quizScore}</span>
    </div>
    <div class="quiz-question-card">${q.q}</div>
    ${q.opts.map((opt,i)=>`
      <div class="quiz-option${quizAnswered&&i===q.ans?' correct':quizAnswered&&i===quizSelected?' wrong':''}${quizAnswered?' disabled':''}" onclick="onQuizAnswer(${i})">
        <div class="option-letter">${String.fromCharCode(65+i)}</div>
        <span>${opt}</span>
        ${quizAnswered ? `<span class="quiz-result-icon">${i===q.ans?'✅':i===quizSelected?'❌':'🔘'}</span>` : ''}
      </div>
    `).join("")}
    <div style="height:20px"></div>`;
}

function onQuizAnswer(idx) {
  if (quizAnswered) return;
  quizSelected = idx;
  quizAnswered = true;
  const q = QUIZ[quizOrder[quizIndex]];
  if (idx === q.ans) quizScore++;
  renderQuizQuestion();
  if (quizIndex >= 9 || quizIndex + 1 >= QUIZ.length) {
    setTimeout(() => { quizState = "finished"; renderQuizState(); }, 1600);
  } else {
    setTimeout(() => {
      quizIndex++;
      quizSelected = -1;
      quizAnswered = false;
      renderQuizState();
    }, 1600);
  }
}

function resetQuiz() { startQuiz(); }

// ─────────────────────────────────────────────
//  STORIES
// ─────────────────────────────────────────────
function buildStories() {
  const list = document.getElementById("stories-list");
  list.innerHTML = "";
  STORIES.forEach((s) => {
    const item = document.createElement("div");
    item.className = "story-list-item";
    item.innerHTML = `
      <div class="story-list-icon">📖</div>
      <div class="story-list-info"><p class="story-list-title">${s.title}</p><p class="story-list-meta">${s.minutes} min read</p></div>
      <span class="story-arrow">▶</span>`;
    item.onclick = () => showStoryDetail(s);
    list.appendChild(item);
  });
}

function buildStoryDetail() {
  // story detail is injected per-story via showStoryDetail
}

function showStoryDetail(s) {
  document.getElementById("story-title").textContent = s.title;
  document.getElementById("story-telugu-title").textContent = s.telugu;
  document.getElementById("story-info").textContent = `${s.minutes} min read · Mythology`;
  document.getElementById("story-body").textContent = s.body;
  navigate("story-detail");
}

// ─────────────────────────────────────────────
//  MEMORY MATCH
// ─────────────────────────────────────────────
const MEM_WORDS = ["Ayodhya","Balaramudu","Krishna","Hanuman","Chakra","Flute","Veda","Values"];

function buildMemory() {
  memoryCards = [];
  MEM_WORDS.forEach((w,i) => {
    memoryCards.push({ id:i, pair:i, label:w });

  });
  // duplicate for pairs
  memoryFlipped = new Array(MEM_WORDS.length * 2).fill(false);
  memoryMoves = 0;
  memoryMatchedPairs = 0;
  memoryLocked = false;
  shuffleArray(memoryCards);
  // shuffle into 16
  memoryCards.push(...MEM_WORDS.map((w,i)=>({ id:i+8, pair:i, label:w })));
  shuffleArray(memoryCards);
  renderMemory();
}

function renderMemory() {
  const grid = document.getElementById("memory-grid");
  grid.innerHTML = "";
  const bgColors = ["#3B82F6","#EC4899","#059669","#F59E0B","#AB47BC","#26A69A","#EF5350","#8D6E63"];
  memoryCards.forEach((c,i) => {
    const el = document.createElement("div");
    const flipped = memoryFlipped[i] || c.pair !== undefined;
    el.className = "memory-card" + (flipped ? " flipped" : " hidden-card") + (c.matched ? " matched" : "");
    el.style.background = !flipped
      ? "linear-gradient(135deg, #6D5BA7, #B06AB3)"
      : `linear-gradient(135deg, ${bgColors[c.pair]||'#ccc'}, ${bgColors[c.pair]||'#ccc'}cc)`;
    el.textContent = flipped ? c.label : "🙏";
    el.onclick = () => onMemoryTap(i);
    grid.appendChild(el);
  });
  document.getElementById("memory-moves").textContent = memoryMoves;
  document.getElementById("memory-matched").textContent = memoryMatchedPairs;
}

function onMemoryTap(idx) {
  if (memoryLocked || memoryFlipped[idx]) return;
  memoryFlipped[idx] = true;
  renderMemory();

  const flippedIdx = memoryFlipped.map((f,i)=>f?i:-1).filter(i=>i>=0 && i!==idx);
  if (flippedIdx.length === 0) return;

  memoryMoves++;
  const other = flippedIdx[0];
  const a = memoryCards[idx], b = memoryCards[other];
  if (a.pair === b.pair) {
    memoryMatchedPairs++;
    memoryCards[idx].matched = true;
    memoryCards[other].matched = true;
    renderMemory();
    if (memoryMatchedPairs === MEM_WORDS.length) {
      setTimeout(confettiBurst, 300);
    }
  } else {
    memoryLocked = true;
    setTimeout(() => {
      memoryFlipped[idx] = false;
      memoryFlipped[other] = false;
      memoryLocked = false;
      renderMemory();
    }, 900);
  }
  renderMemory();
}

function resetMemory() { buildMemory(); }

// ─────────────────────────────────────────────
//  REWARDS
// ─────────────────────────────────────────────
function buildRewards() {
  const grid = document.getElementById("badges-grid");
  grid.innerHTML = "";
  BADGES.forEach(b => {
    const div = document.createElement("div");
    div.className = "badge-card" + (b.earned ? "" : " locked");
    div.innerHTML = `
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-label">${b.label}</div>
      <div class="badge-desc">${b.desc}</div>
      ${b.earned ? '<div class="badge-earned">Earned ✅</div>' : ''}`;
    grid.appendChild(div);
  });
}

// ─────────────────────────────────────────────
//  LANGUAGE
// ─────────────────────────────────────────────
let selectedLang = "English";
function buildLanguage() {
  const list = document.getElementById("language-list");
  list.innerHTML = "";
  LANGUAGES.forEach(l => {
    const div = document.createElement("div");
    div.className = "lang-item" + (l.name === selectedLang ? " selected" : "");
    div.innerHTML = `
      <span class="lang-flag">${l.flag}</span>
      <span class="lang-name">${l.name}</span>
      <span class="lang-code">${l.code.toUpperCase()}</span>
      <span class="lang-radio">${l.name===selectedLang?'🔘':'🔵'}</span>`;
    div.onclick = () => {
      selectedLang = l.name;
      buildLanguage();
    };
    list.appendChild(div);
  });
}

// ─────────────────────────────────────────────
//  DAILY QUOTE
// ─────────────────────────────────────────────
function buildDailyQuote() {
  document.getElementById("quote-large-text").textContent = `"${QUOTES[quoteIndex]}"`;
  const dots = document.getElementById("quote-dots");
  dots.innerHTML = "";
  QUOTES.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "quote-dot" + (i === quoteIndex ? " active" : "");
    dots.appendChild(dot);
  });
}

function cycleQuote() {
  quoteIndex = (quoteIndex + 1) % QUOTES.length;
  buildDailyQuote();
}

// ─────────────────────────────────────────────
//  CONFETTI
// ─────────────────────────────────────────────
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
let confettiParticles = [];
let confettiRunning = false;

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

function confettiBurst() {
  confettiParticles = [];
  const colors = ["#F97316","#EC4899","#F59E0B","#3B82F6","#059669","#AB47BC","#26A69A"];
  for (let i = 0; i < 120; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.5) * 16,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      life: 120,
      rot: Math.random() * 360,
    });
  }
  if (!confettiRunning) { confettiRunning = true; requestAnimationFrame(confettiLoop); }
}

function confettiLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (confettiParticles.length === 0) { confettiRunning = false; return; }
  confettiParticles = confettiParticles.filter(p => p.life > 0);
  confettiParticles.forEach(p => {
    p.x   += p.vx;
    p.y   += p.vy;
    p.vy  += 0.35;
    p.vx  *= 0.98;
    p.life--;
    p.rot += 3;
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot * Math.PI / 180);
    ctx.globalAlpha = p.life / 120;
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
    ctx.restore();
  });
  requestAnimationFrame(confettiLoop);
}

// ─────────────────────────────────────────────
//  INITIALISE
// ─────────────────────────────────────────────
buildDailyQuote();
