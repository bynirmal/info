# Bala Aksharam — Little Rishis

> 🌐 **Live:** https://bynirmal.github.io/bala-aksharam/

A modern AI-powered educational mobile app for kids that teaches alphabets using
Indian culture, Ramayanam, spirituality, and mythology.

## Core Concept

Instead of object-based alphabet learning, every letter teaches a word rooted in
Indian spiritual and cultural heritage:
```
A — Ayodhya      B — Balaramudu    C — Chakra
D — Dasharatha   E — Ekaadasi      F — Flute (Krishna's)
G — Ganga        H — Hanuman       I — Indra
J — Jagannatha   K — Krishna       L — Lakshmana
…through to Z — Zeal (Ullasam)
```

## Tech Stack
- **Flutter** — cross-platform mobile framework
- **Provider** — app state management
- **AudioPlayers** — pronunciation audio
- **Lottie / Confetti** — animations and celebrations
- **Google Fonts** — friendly, readable typography
- **Shared Preferences** — local score/level persistence

## Project Structure
```
lib/
├── main.dart                    # App entry point
├── app.dart                     # Route definitions & MaterialApp
├── data/
│   ├── alphabet_data.dart       # A–Z mythological vocabulary
│   ├── stories.dart             # Ramayana / Purana story bank
│   ├── quiz_data.dart           # 15+ mythology quiz questions
│   └── daily_quotes.dart        # Daily dharma / moral quotes
├── models/
│   ├── quiz_model.dart          # QuizQuestion model
│   └── user_progress.dart       # Player progress & badges
├── utils/
│   └── app_theme.dart           # App-brand color palette & ThemeData
└── screens/
    ├── splash_screen.dart       # Animated branded launch screen
    ├── home_screen.dart         # Main dashboard with A–Z grid + activities
    ├── alphabet_screen.dart     # Full 26-letter grid
    ├── alphabet_detail_screen.dart  # Per-letter: word, translation, description, TTS
    ├── puzzle_game_screen.dart  # 3×3 sliding-tile A–H puzzle
    ├── quiz_screen.dart         # Multiple-choice mythology quiz
    ├── story_mode_screen.dart   # Story catalogue list view
    ├── story_detail_screen.dart # Full story with illustrations
    ├── memory_match_screen.dart # Card-flip matching game
    ├── rewards_screen.dart      # Stars, badges, level progress
    ├── parent_dashboard_screen.dart  # Weekly charts & parental controls
    ├── games_screen.dart        # Games hub / listing
    ├── settings_screen.dart     # App preferences
    ├── language_selection_screen.dart  # En / Hi / Te / Ta / Bn / Gu
    └── daily_quote_screen.dart  # Dharma of the day
```

## Key Features
- **A–Z Alphabet Grid** — 26 letters, each with a unique mythology word, Telugu script, English description, and +10⭐ reward
- **Tap-to-Hear Audio** — TTS pronunciation trigger per letter
- **Ramayana Stories** — Sita & Golden Deer, Hanuman's Bridge, Little Krishna, Prahlada, Arjuna & Krishna, Sita's Fire Test
- **Quiz** — 15+ questions across Ramayana, Deities, Purana, and Values categories
- **Puzzle** — 3×3 sliding-tile ordering game (A–H)
- **Memory Match** — 8-pair mythology card flip game
- **Rewards & Badges** — 8 achievements, star accumulation, level progression
- **Parent Dashboard** — A–Z/stories progress, weekly bar chart, parental controls
- **Daily Quote / Dharma** — Scrollable daily spiritual quote with confetti on first open
- **6-Language Support** — English, Telugu, Hindi, Tamil, Bengali, Gujarati

## Design
- Saffron / Lotus Pink / Krishna Blue / Divine Gold color palette inspired by Indian mythology
- Rounded cards and soft shadows throughout
- Smooth animations: fade-in, slide, scale, confetti rewards
- Cartoon-friendly sans-serif typography via Nunito / Great Vibes
- Confetti milestones and star badges to incentivise repeated engagement

## Getting Started

### Web (Live — No Build Needed)
The app is auto-deployed on **GitHub Pages**:
> https://bynirmal.github.io/bala-aksharam/

Just open the link in any browser — works on phones, tablets, and desktops.

### Flutter (local development)
```bash
cd bala_aksharam
flutter pub get
flutter run
```

#### Web build from Flutter source
```bash
 flutter build web --release
# output is in build/web/
```

## Future Enhancements
- Real AI voice (ElevenLabs / gTTS) instead of placeholder assets
- Firebase Authentication for parent accounts
- Firebase Firestore for cloud synced progress
- Animated Lottie illustrations per alphabet word
- Background devotional music player
- AR / sticker reward notifications
- More regional language packs and voice profiles
