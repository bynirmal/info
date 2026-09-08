import "package:flutter/material.dart";
import "package:bala_aksharam/screens/splash_screen.dart";
import "package:bala_aksharam/screens/home_screen.dart";
import "package:bala_aksharam/screens/alphabet_screen.dart";
import "package:bala_aksharam/screens/alphabet_detail_screen.dart";
import "package:bala_aksharam/screens/puzzle_game_screen.dart";
import "package:bala_aksharam/screens/quiz_screen.dart";
import "package:bala_aksharam/screens/story_mode_screen.dart";
import "package:bala_aksharam/screens/story_detail_screen.dart";
import "package:bala_aksharam/screens/rewards_screen.dart";
import "package:bala_aksharam/screens/parent_dashboard_screen.dart";
import "package:bala_aksharam/screens/games_screen.dart";
import "package:bala_aksharam/screens/memory_match_screen.dart";
import "package:bala_aksharam/screens/settings_screen.dart";
import "package:bala_aksharam/screens/language_selection_screen.dart";
import "package:bala_aksharam/screens/daily_quote_screen.dart";
import "package:bala_aksharam/data/alphabet_data.dart";
import "package:bala_aksharam/data/stories.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Nirmal Kumar | Portfolio",
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme(),
      initialRoute: "/home",
      routes: {
        "/splash": (context) => const SplashScreen(),
        "/home": (context) => const HomeScreen(),
        "/alphabet": (context) => const AlphabetScreen(),
        "/alphabet_detail": (context) {
          final args = ModalRoute.of(context)!.settings.arguments
              as AlphabetData;
          return AlphabetDetailScreen(data: args);
        },
        "/puzzle": (context) => const PuzzleGameScreen(),
        "/memory_match": (context) => const MemoryMatchScreen(),
        "/quiz": (context) => const QuizScreen(),
        "/stories": (context) => const StoryModeScreen(),
        "/story_detail": (context) {
          final args = ModalRoute.of(context)!.settings.arguments as Story;
          return StoryDetailScreen(story: args);
        },
        "/rewards": (context) => const RewardsScreen(),
        "/parent": (context) => const ParentDashboardScreen(),
        "/games": (context) => const GamesScreen(),
        "/settings": (context) => const SettingsScreen(),
        "/language": (context) => const LanguageSelectionScreen(),
        "/daily_quote": (context) => const DailyQuoteScreen(),
      },
    );
  }
}
