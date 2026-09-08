import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class GamesScreen extends StatelessWidget {
  const GamesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Games", style: GoogleFonts.nunito()),
        backgroundColor: AppTheme.peacockGreen,
      ),
      body: ListView(
        padding: const EdgeInsets.all(20),
        children: [
          _featuredBanner(),
          const SizedBox(height: 20),
          Text(
            "More Games",
            style: GoogleFonts.nunito(
              fontSize: 18,
              fontWeight: FontWeight.w700,
              color: AppTheme.textPrimary,
            ),
          ),
          const SizedBox(height: 12),
          _gameCard(
            context,
            icon: Icons.grid_view_rounded,
            title: "Memory Match",
            subtitle: "Match alphabet cards",
            color: AppTheme.primaryKrishna,
            route: "/memory_match",
          ),
          const SizedBox(height: 10),
          _gameCard(
            context,
            icon: Icons.extension_rounded,
            title: "Puzzle Assembly",
            subtitle: "Arrange A–H in order",
            color: AppTheme.peacockGreen,
            route: "/puzzle",
          ),
          const SizedBox(height: 10),
          _gameCard(
            context,
            icon: Icons.abc_rounded,
            title: "Letter Tracing",
            subtitle: "Trace letters in English & Telugu",
            color: AppTheme.primarySaffron,
            comingSoon: true,
          ),
          const SizedBox(height: 10),
          _gameCard(
            context,
            icon: Icons.audiotrack_rounded,
            title: "Sound Matching",
            subtitle: "Match word with its sound",
            color: AppTheme.lotusPink,
            route: null,
            comingSoon: true,
          ),
        ],
      ),
    );
  }

  Widget _featuredBanner() {
    return Container(
      padding: const EdgeInsets.all(22),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [
            AppTheme.peacockBlue,
            AppTheme.primaryKrishna,
          ],
        ),
        borderRadius: BorderRadius.circular(24),
        boxShadow: [
          BoxShadow(
            color: AppTheme.primaryKrishna.withOpacity(0.35),
            blurRadius: 20,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Row(
        children: [
          Container(
            width: 64,
            height: 64,
            decoration: const BoxDecoration(
              shape: BoxShape.circle,
              color: AppTheme.white,
            ),
            child: const Icon(
              Icons.security_rounded,
              size: 32,
              color: AppTheme.primaryKrishna,
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Featured Game",
                  style: GoogleFonts.nunito(
                    fontSize: 12,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 1,
                    color: AppTheme.offWhite,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  "Memory Match",
                  style: GoogleFonts.nunito(
                    fontSize: 20,
                    fontWeight: FontWeight.w800,
                    color: AppTheme.white,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  "Match 8 mytho-themed pairs",
                  style: GoogleFonts.nunito(
                    fontSize: 13,
                    color: AppTheme.offWhite,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _gameCard(
    BuildContext context, {
    required IconData icon,
    required String title,
    required String subtitle,
    required Color color,
    String? route,
    bool comingSoon = false,
  }) {
    return GestureDetector(
      onTap: () {
        if (comingSoon) {
          ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
              content: Text("$title coming soon!"),
              backgroundColor: AppTheme.textSecondary,
            ),
          );
        } else if (route != null) {
          Navigator.of(context).pushNamed(route);
        }
      },
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: AppTheme.white,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: color.withOpacity(0.2)),
          boxShadow: [
            BoxShadow(
              color: color.withOpacity(0.07),
              blurRadius: 10,
            ),
          ],
        ),
        child: Row(
          children: [
            Container(
              padding: const EdgeInsets.all(13),
              decoration: BoxDecoration(
                color: color.withOpacity(0.12),
                borderRadius: BorderRadius.circular(14),
              ),
              child: Icon(icon, color: color, size: 28),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    style: GoogleFonts.nunito(
                      fontSize: 16,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.textPrimary,
                    ),
                  ),
                  Text(
                    subtitle,
                    style: GoogleFonts.nunito(
                      fontSize: 12,
                      color: AppTheme.textMuted,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
            ),
            if (comingSoon)
              Container(
                padding: const EdgeInsets.symmetric(
                  horizontal: 10,
                  vertical: 4,
                ),
                decoration: BoxDecoration(
                  color: AppTheme.divineGoldLight.withOpacity(0.4),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Text(
                  "Soon",
                  style: GoogleFonts.nunito(
                    fontWeight: FontWeight.w700,
                    color: AppTheme.sandalwood,
                    fontSize: 12,
                  ),
                ),
              )
            else
              Icon(
                Icons.arrow_forward_ios_rounded,
                color: color,
                size: 16,
              ),
          ],
        ),
      ),
    );
  }
}
