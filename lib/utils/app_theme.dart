import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";

class AppTheme {
  static const Color ink = Color(0xFF0B1020);
  static const Color inkSoft = Color(0xFF111B2E);
  static const Color panel = Color(0xFF16213A);
  static const Color panelAlt = Color(0xFF1C2946);
  static const Color ivory = Color(0xFFF5F7FF);
  static const Color mist = Color(0xFFB6C2D9);
  static const Color cyan = Color(0xFF52D3D8);
  static const Color amber = Color(0xFFFFB454);
  static const Color coral = Color(0xFFF26B5B);
  static const Color jade = Color(0xFF8CE9A5);
  static const Color white = Color(0xFFFFFFFF);
  static const Color textPrimary = Color(0xFFF5F7FF);
  static const Color textSecondary = Color(0xFFB6C2D9);
  static const Color textMuted = Color(0xFF8EA1C0);
  static const Color border = Color(0xFF2A3B60);

  static const Color primarySaffron = Color(0xFFFFB454);
  static const Color primarySaffronLight = Color(0xFFFFD2A7);
  static const Color primarySaffronDark = Color(0xFFEE8C2D);
  static const Color primaryKrishna = Color(0xFF52D3D8);
  static const Color lotusPink = Color(0xFFF26B5B);
  static const Color lotusPinkLight = Color(0xFFFFA38C);
  static const Color lotusCream = Color(0xFFF5F7FF);
  static const Color lotusWarmBg = Color(0xFF0B1020);
  static const Color divineGold = Color(0xFFFFB454);
  static const Color peacockGreen = Color(0xFF8CE9A5);
  static const Color peacockBlue = Color(0xFF52D3D8);
  static const Color successGreen = Color(0xFF8CE9A5);
  static const Color errorRed = Color(0xFFF26B5B);
  static const Color dividerColor = Color(0xFF2A3B60);

  static ThemeData darkTheme() {
    return ThemeData(
      primaryColor: cyan,
      scaffoldBackgroundColor: ink,
      colorScheme: const ColorScheme.dark(
        primary: cyan,
        secondary: amber,
        surface: panel,
        background: ink,
        error: errorRed,
      ),
      textTheme: GoogleFonts.manropeTextTheme(
        const TextTheme(
          displayLarge: TextStyle(
            color: textPrimary,
            fontWeight: FontWeight.w800,
          ),
          displayMedium: TextStyle(
            color: textPrimary,
            fontWeight: FontWeight.w700,
          ),
          displaySmall: TextStyle(
            color: textPrimary,
            fontWeight: FontWeight.w600,
          ),
          headlineMedium: TextStyle(
            color: textPrimary,
            fontWeight: FontWeight.w700,
          ),
          bodyLarge: TextStyle(color: textPrimary),
          bodyMedium: TextStyle(color: textSecondary),
          bodySmall: TextStyle(color: textMuted),
          labelLarge: TextStyle(
            color: ink,
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          backgroundColor: cyan,
          foregroundColor: ink,
          elevation: 0,
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(18),
          ),
        ),
      ),
      dividerColor: dividerColor,
      appBarTheme: const AppBarTheme(
        backgroundColor: ink,
        foregroundColor: ivory,
        elevation: 0,
      ),
    );
  }

  static ThemeData lightTheme() => darkTheme();
}
