import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:bala_aksharam/data/daily_quotes.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class DailyQuoteScreen extends StatefulWidget {
  const DailyQuoteScreen({super.key});

  @override
  State<DailyQuoteScreen> createState() => _DailyQuoteScreenState();
}

class _DailyQuoteScreenState extends State<DailyQuoteScreen> {
  int _index = 0;

  @override
  Widget build(BuildContext context) {
    final quotes = dailyQuotes;
    final quote = quotes[_index];

    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            colors: [
              AppTheme.lotusCream,
              AppTheme.marigoldYellowLight,
              AppTheme.divineGoldLight,
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              const SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  IconButton(
                    icon: const Icon(
                      Icons.arrow_back_ios_new_rounded,
                      color: AppTheme.primarySaffron,
                    ),
                    onPressed: () => Navigator.of(context).pop(),
                  ),
                  Text(
                    "Daily Dharma",
                    style: GoogleFonts.nunito(
                      fontSize: 20,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.textPrimary,
                    ),
                  ),
                  IconButton(
                    icon: const Icon(Icons.refresh_rounded, color: AppTheme.primarySaffron),
                    onPressed: () {
                      setState(() {
                        _index = (_index + 1) % quotes.length;
                      });
                    },
                  ),
                ],
              ),
              const SizedBox(height: 32),
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(horizontal: 24),
                  child: Column(
                    children: [
                      AnimatedSwitcher(
                        duration: const Duration(milliseconds: 400),
                        child: Container(
                          key: ValueKey(_index),
                          padding: const EdgeInsets.all(28),
                          decoration: BoxDecoration(
                            color: AppTheme.white,
                            borderRadius: BorderRadius.circular(28),
                            border: Border.all(
                              color: AppTheme.divineGold.withOpacity(0.45),
                              width: 2,
                            ),
                            boxShadow: [
                              BoxShadow(
                                color: AppTheme.divineGold.withOpacity(0.18),
                                blurRadius: 24,
                              ),
                            ],
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const Text(
                                "🪷",
                                style: TextStyle(fontSize: 60),
                              ),
                              const SizedBox(height: 18),
                              Text(
                                '"$quote"',
                                style: GoogleFonts.nunito(
                                  fontSize: 19,
                                  fontWeight: FontWeight.w700,
                                  color: AppTheme.textPrimary,
                                  height: 1.6,
                                ),
                              ),
                              const SizedBox(height: 18),
                              Container(
                                height: 3,
                                decoration: BoxDecoration(
                                  gradient: const LinearGradient(
                                    colors: [
                                      AppTheme.primarySaffron,
                                      AppTheme.lotusPink,
                                      AppTheme.divineGold,
                                    ],
                                  ),
                                  borderRadius: BorderRadius.circular(2),
                                ),
                              ),
                              const SizedBox(height: 10),
                              Row(
                                children: [
                                  const Text("🌺", style: TextStyle(fontSize: 20)),
                                  const SizedBox(width: 8),
                                  Text(
                                    "Little Rishis",
                                    style: GoogleFonts.nunito(
                                      fontSize: 13,
                                      fontWeight: FontWeight.w600,
                                      color: AppTheme.textMuted,
                                      fontStyle: FontStyle.italic,
                                    ),
                                  ),
                                ],
                              ),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(height: 12),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: List.generate(
                          quotes.length,
                          (i) => Container(
                            margin: EdgeInsets.only(right: i < quotes.length - 1 ? 4.0 : 0),
                            width: 8,
                            height: 8,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: i == _index
                                  ? AppTheme.primarySaffron
                                  : AppTheme.textMuted.withOpacity(0.3),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
