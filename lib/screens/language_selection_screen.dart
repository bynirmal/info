import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class LanguageSelectionScreen extends StatefulWidget {
  const LanguageSelectionScreen({super.key});

  @override
  State<LanguageSelectionScreen> createState() =>
      _LanguageSelectionScreenState();
}

class _LanguageSelectionScreenState extends State<LanguageSelectionScreen> {
  String _selected = "English";

  @override
  Widget build(BuildContext context) {
    final languages = [
      {"name": "English", "code": "en", "flag": "🇬🇧", "selected": true},
      {"name": "Telugu", "code": "te", "flag": "🇮🇳", "selected": false},
      {"name": "Hindi", "code": "hi", "flag": "🇮🇳", "selected": false},
      {"name": "Tamil", "code": "ta", "flag": "🇮🇳", "selected": false},
      {"name": "Bengali", "code": "bn", "flag": "🇮🇳", "selected": false},
      {"name": "Gujarati", "code": "gu", "flag": "🇮🇳", "selected": false},
    ];
    return Scaffold(
      appBar: AppBar(
        title: Text("Language", style: GoogleFonts.nunito()),
        backgroundColor: AppTheme.peacockBlue,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 10),
              child: Column(
                children: [
                  Text(
                    "Spirit",
                    style: GoogleFonts.greatVibes(
                      fontSize: 28,
                      color: AppTheme.textSecondary,
                    ),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    "Choose your favorite language\nfor the best learning experience!",
                    textAlign: TextAlign.center,
                    style: GoogleFonts.nunito(
                      fontSize: 15,
                      color: AppTheme.textMuted,
                      height: 1.6,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 24),
            ...languages.map((lang) {
              final selected = lang["name"] == _selected;
              return GestureDetector(
                onTap: () => setState(() => _selected = lang["name"] as String),
                child: Container(
                  margin: EdgeInsets.only(bottom: (languages.indexOf(lang) < languages.length - 1) ? 10 : 0),
                  padding: const EdgeInsets.symmetric(
                    horizontal: 18,
                    vertical: 14,
                  ),
                  decoration: BoxDecoration(
                    color: selected
                        ? AppTheme.primaryKrishna.withOpacity(0.09)
                        : AppTheme.white,
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(
                      color: selected
                          ? AppTheme.primaryKrishna
                          : AppTheme.dividerColor,
                      width: selected ? 2.2 : 1.2,
                    ),
                  ),
                  child: Row(
                    children: [
                      Text(
                        lang["flag"] as String,
                        style: const TextStyle(fontSize: 26),
                      ),
                      const SizedBox(width: 14),
                      Expanded(
                        child: Text(
                          lang["name"] as String,
                          style: GoogleFonts.nunito(
                            fontSize: 16,
                            fontWeight: FontWeight.w700,
                            color: AppTheme.textPrimary,
                          ),
                        ),
                      ),
                      Text(
                        (lang["code"] as String).toUpperCase(),
                        style: GoogleFonts.nunito(
                          fontSize: 13,
                          color: AppTheme.textMuted,
                          fontWeight: FontWeight.w600,
                        ),
                      ),
                      const SizedBox(width: 10),
                      Icon(
                        selected
                            ? Icons.radio_button_checked_rounded
                            : Icons.radio_button_unchecked_rounded,
                        color: selected
                            ? AppTheme.primaryKrishna
                            : AppTheme.textMuted,
                        size: 22,
                      ),
                    ],
                  ),
                ),
              );
            }).toList(),
            const Spacer(),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppTheme.primaryKrishna,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(18),
                  ),
                ),
                child: Text(
                  "Apply Language",
                  style: GoogleFonts.nunito(
                    fontSize: 16,
                    fontWeight: FontWeight.w700,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}
