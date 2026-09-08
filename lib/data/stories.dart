class Story {
  final String id;
  final String title;
  final String teluguTitle;
  final String content;
  final String imagePath;
  final int level;
  final String category;
  final int readingTime;

  const Story({
    required this.id,
    required this.title,
    required this.teluguTitle,
    required this.content,
    required this.imagePath,
    required this.level,
    required this.category,
    required this.readingTime,
  });
}

const List<Story> stories = [
  Story(
    id: "sita_lakshmi",
    title: "Sita and the Golden Deer",
    teluguTitle: "సీత & బంగారు జinka",
    content: "Sita and Ram wanted a peaceful life in the forest. One day, a beautiful golden deer appeared nearby. 'Ram,' said Sita, 'please catch it for me.' So Ram followed the deer deep into the woods. But the deer was actually Ravana in disguise! While Ram chased the deer, Ravana came as an old sadhu and tricked Sita into coming with him. When Ram returned, Sita was gone. He searched everywhere and asked his dear friend Hanuman for help. Hanuman found Sita in Lanka, and saved her by flying across the ocean with his powerful wings.",
    imagePath: "assets/images/story_golden_deer.png",
    level: 1,
    category: "Ramayana",
    readingTime: 5,
  ),
  Story(
    id: "hanuman_bridge",
    title: "Hanuman Builds the Ocean Bridge",
    teluguTitle: "హనుమాన్ సముద్ర బ్రిడ్జ్ నిర్మిస్తాడు",
    content: "When Ram wanted to rescue Sita from Lanka, his army faced a big ocean as a challenge. Ram asked his powerful monkeys to find a way. Hanuman had an amazing idea. He called his friends — Jambavan, Nala, and Nila. Together, they picked huge rocks and started building a bridge straight into the ocean! Every rock had Ram's name written on it. Even the ocean let the bridge stay strong. Soon, Ram's army reached Lanka, and the battle for dharma began.",
    imagePath: "assets/images/story_bridge.png",
    level: 2,
    category: "Ramayana",
    readingTime: 6,
  ),
  Story(
    id: "krishna_butter",
    title: "Little Krishna and the Butter",
    teluguTitle: " పిల్లకృష్ణ మరియు నేయ్ బజ్జి",
    content: "Baby Krishna loved butter more than anything in the world! One morning, his mother Yashoda tied a bell around his neck to make sure he would not sneak out. But Krishna was too clever. He opened the window with his little toes while Yashoda was busy cooking, climbed into the neighbour's house, and ate all the butter! When Yashoda found him with butter in his mouth, she smiled. Krishna's butter-stealing pranks are famous even today!",
    imagePath: "assets/images/story_butter.png",
    level: 1,
    category: "Krishna",
    readingTime: 4,
  ),
  Story(
    id: "prahlada_narasimha",
    title: "Prahlada and Lord Narasimha",
    teluguTitle: "ప్రహ్లాద & నరసింహ",
    content: "Prahlada was the son of the demon king Hiranyakashipu. His father wanted everyone to worship him as god and forbade Prahlada from worshipping Lord Vishnu. But Prahlada loved Vishnu so much! His father got angry and tried to hurt him many times. Once, when Prahlada was praying, Lord Vishnu appeared as Narsimha — half lion, half man — from a pillar. He saved Prahlada and showed that true devotion always wins.",
    imagePath: "assets/images/story_narasimha.png",
    level: 3,
    category: "Purana",
    readingTime: 7,
  ),
  Story(
    id: "arjuna_krishna_karna",
    title: "Arjuna, Krishna and Karna",
    teluguTitle: "అర్జునుడు, కృష్ణుడు మరియు కర్ణుడు",
    content: "Before the great Mahabharata war, Arjuna became sad and said, 'Krishna, I cannot fight my family. What is the point of winning a kingdom if our own people are gone?' Lord Krishna then gave Arjuna the Bhagavad Gita — the most beautiful spiritual teaching in the world. 'Do your duty without attachment,' said Krishna. 'Act with love and devotion, and leave all results to God.' After hearing Krishna, Arjuna picked up his bow and fought for what was right.",
    imagePath: "assets/images/story_arjuna.png",
    level: 3,
    category: "Mahabharata",
    readingTime: 8,
  ),
  Story(
    id: "sita_purity_fire",
    title: "Sita's Purity Test — The Fire",
    teluguTitle: "సీత అగ్ని పరీక్ష",
    content: "After defeating Ravana and saving Sita, Ram returned to Ayodhya. But some people questioned Sita's purity during her time in Lanka. To prove her innocence, Sita agreed to walk into fire. The fire was so hot that it could burn anything. But because Sita was completely pure in heart, the fire did not hurt her one bit. Lord Agni himself came out and said, 'Sita is pure.' The people cheered and applauded, and Ram hugged his beloved wife with happy tears.",
    imagePath: "assets/images/story_fire.png",
    level: 2,
    category: "Ramayana",
    readingTime: 7,
  ),
];
