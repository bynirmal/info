import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:bala_aksharam/data/alphabet_data.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class AlphabetScreen extends StatelessWidget {
  const AlphabetScreen({super.key});

  static const List<Color> gradientColors = [
    AppTheme.primarySaffronLight,
    AppTheme.lotusPinkLight,
    AppTheme.primaryKrishnaLight,
    AppTheme.peacockGreenLight,
    AppTheme.divineGoldLight,
    AppTheme.marigoldYellowLight,
    AppTheme.primarySaffron,
    AppTheme.lotusPink,
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("A–Z Alphabet"),
        backgroundColor: AppTheme.primarySaffron,
        elevation: 0,
      ),
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          crossAxisSpacing: 14,
          mainAxisSpacing: 14,
          childAspectRatio: 1.0,
        ),
        itemCount: alphabetList.length,
        itemBuilder: (context, index) {
          final data = alphabetList[index];
          final gradientColor = gradientColors[index % gradientColors.length];
          final isCompleted = false;

          return GestureDetector(
            onTap: () {
              Navigator.of(context).pushNamed("/alphabet_detail", arguments: data);
            },
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: [
                    gradientColor,
                    gradientColor.withOpacity(0.7),
                  ],
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                ),
                borderRadius: BorderRadius.circular(22),
                boxShadow: [
                  BoxShadow(
                    color: gradientColor.withOpacity(0.3),
                    blurRadius: 12,
                    offset: const Offset(0, 5),
                  ),
                ],
              ),
              child: Stack(
                children: [
                  Positioned(
                    top: 10,
                    right: 14,
                    child: Container(
                      padding: const EdgeInsets.symmetric(
                        horizontal: 8,
                        vertical: 4,
                      ),
                      decoration: BoxDecoration(
                        color: AppTheme.white.withOpacity(0.3),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Text(
                        "+${data.scoreReward}⭐",
                        style: GoogleFonts.nunito(
                          fontSize: 10,
                          fontWeight: FontWeight.w700,
                          color: AppTheme.white,
                        ),
                      ),
                    ),
                  ),
                  Positioned.fill(
                    child: Padding(
                      padding: const EdgeInsets.all(16),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            width: 64,
                            height: 64,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: AppTheme.white.withOpacity(0.25),
                              border: Border.all(
                                color: AppTheme.white.withOpacity(0.5),
                                width: 2,
                              ),
                            ),
                            child: Center(
                              child: FittedBox(
                                fit: BoxFit.scaleDown,
                                child: Text(
                                  data.letter,
                                  style: GoogleFonts.nunito(
                                    fontSize: 36,
                                    fontWeight: FontWeight.w800,
                                    color: AppTheme.white,
                                  ),
                                ),
                              ),
                            ),
                          ),
                          const SizedBox(height: 10),
                          Text(
                            data.word,
                            style: GoogleFonts.nunito(
                              fontSize: 16,
                              fontWeight: FontWeight.w700,
                              color: AppTheme.white,
                            ),
                            textAlign: TextAlign.center,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                          ),
                          const SizedBox(height: 4),
                          Text(
                            data.teluguWord,
                            style: GoogleFonts.balooTamma2(
                              fontSize: 13,
                              color: AppTheme.white.withOpacity(0.9),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  Positioned(
                    bottom: 8,
                    right: 8,
                    child: Icon(
                      isCompleted
                          ? Icons.check_circle_rounded
                          : Icons.chevron_right_rounded,
                      color: AppTheme.white.withOpacity(0.8),
                      size: 20,
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
