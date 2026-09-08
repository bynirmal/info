import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class RewardsScreen extends StatelessWidget {
  const RewardsScreen({super.key});

  static const List<Map<String, dynamic>> badges = [
    {
      "icon": "🕉️",
      "label": "First Rishi",
      "desc": "Complete your first alphabet",
      "earned": true,
    },
    {
      "icon": "📖",
      "label": "Story Teller",
      "desc": "Read 5 stories",
      "earned": true,
    },
    {
      "icon": "🧮",
      "label": "Quiz Master",
      "desc": "Score 10/10 in quiz",
      "earned": false,
    },
    {
      "icon": "🧩",
      "label": "Puzzle Pro",
      "desc": "Solve 5 puzzles",
      "earned": true,
    },
    {
      "icon": "🌅",
      "label": "7-Day Shield",
      "desc": "Practice for 7 days straight",
      "earned": true,
    },
    {
      "icon": "🔥",
      "label": "Dharma Star",
      "desc": "Earn 500 total stars",
      "earned": false,
    },
    {
      "icon": "🙏",
      "label": "Humble Heart",
      "desc": "Show kindness earned in quiz",
      "earned": true,
    },
    {
      "icon": "🪷",
      "label": "Sacred Completion",
      "desc": "Learn all 26 alphabets",
      "earned": false,
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Rewards", style: GoogleFonts.nunito()),
        backgroundColor: AppTheme.primarySaffron,
        actions: [
          Container(
            margin: const EdgeInsets.only(right: 12, top: 8, bottom: 8),
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
            decoration: BoxDecoration(
              color: AppTheme.white.withOpacity(0.2),
              borderRadius: BorderRadius.circular(20),
            ),
            child: Row(
              children: [
                const Icon(Icons.star, color: AppTheme.white, size: 18),
                const SizedBox(width: 4),
                Text(
                  "340 ⭐",
                  style: GoogleFonts.nunito(
                    fontWeight: FontWeight.w700,
                    color: AppTheme.white,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            _buildHeader(context),
            const SizedBox(height: 24),
            _buildLevelCard(),
            const SizedBox(height: 28),
            _buildSectionTitle("Badges & Achievements"),
            const SizedBox(height: 16),
            GridView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                crossAxisCount: 2,
                crossAxisSpacing: 14,
                mainAxisSpacing: 14,
                childAspectRatio: 0.82,
              ),
              itemCount: badges.length,
              itemBuilder: (context, index) {
                final badge = badges[index];
                return _buildBadge(badge, index);
              },
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildHeader(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [
            AppTheme.primarySaffron,
            AppTheme.lotusPink,
          ],
        ),
        borderRadius: BorderRadius.circular(24),
      ),
      child: Row(
        children: [
          Container(
            width: 72,
            height: 72,
            decoration: const BoxDecoration(
              shape: BoxShape.circle,
              color: AppTheme.white,
            ),
            child: const Icon(
              Icons.volunteer_activism_rounded,
              size: 40,
              color: AppTheme.primarySaffron,
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Rishi",
                  style: GoogleFonts.nunito(
                    fontSize: 24,
                    fontWeight: FontWeight.w800,
                    color: AppTheme.white,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  "Learning • Growing • Symbolizing",
                  style: GoogleFonts.nunito(
                    fontSize: 13,
                    color: AppTheme.offWhite,
                  ),
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: AppTheme.white.withOpacity(0.2),
              borderRadius: BorderRadius.circular(14),
            ),
            child: Text(
              "Lv.5",
              style: GoogleFonts.nunito(
                fontSize: 22,
                fontWeight: FontWeight.w800,
                color: AppTheme.white,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildLevelCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppTheme.white,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: AppTheme.divineGold.withOpacity(0.35)),
        boxShadow: [
          BoxShadow(
            color: AppTheme.divineGold.withOpacity(0.12),
            blurRadius: 12,
          ),
        ],
      ),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "Level 5 · Little Scholar",
                style: GoogleFonts.nunito(
                  fontSize: 15,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.textPrimary,
                ),
              ),
              Text(
                "340/500 ⭐",
                style: GoogleFonts.nunito(
                  fontSize: 13,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.divineGold,
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          LinearProgressIndicator(
            value: 340 / 500,
            backgroundColor: AppTheme.offWhite,
            color: AppTheme.divineGold,
            minHeight: 10,
            borderRadius: BorderRadius.circular(5),
          ),
          const SizedBox(height: 6),
          Align(
            alignment: Alignment.centerRight,
            child: Text(
              "160 ⭐ to Level 6",
              style: GoogleFonts.nunito(
                fontSize: 11,
                color: AppTheme.textMuted,
                fontWeight: FontWeight.w600,
              ),
            ),
          ),
          const SizedBox(height: 16),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              _statItem("26", "Letters"),
              _statItem("12", "Stories"),
              _statItem("8", "Badges"),
              _statItem("7", "Day Streak"),
            ],
          ),
        ],
      ),
    );
  }

  Widget _statItem(String value, String label) {
    return Column(
      children: [
        Text(
          value,
          style: GoogleFonts.nunito(
            fontSize: 20,
            fontWeight: FontWeight.w800,
            color: AppTheme.primaryKrishna,
          ),
        ),
        Text(
          label,
          style: GoogleFonts.nunito(
            fontSize: 11,
            color: AppTheme.textMuted,
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }

  Widget _buildSectionTitle(String text) {
    return Align(
      alignment: Alignment.centerLeft,
      child: Text(
        text,
        style: GoogleFonts.nunito(
          fontSize: 18,
          fontWeight: FontWeight.w700,
          color: AppTheme.textPrimary,
        ),
      ),
    );
  }

  Widget _buildBadge(Map<String, dynamic> badge, int index) {
    final earned = badge["earned"] as bool;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: earned
            ? AppTheme.divineGoldLight.withOpacity(0.3)
            : AppTheme.offWhite,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(
          color: earned
              ? AppTheme.divineGold.withOpacity(0.5)
              : AppTheme.dividerColor,
        ),
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            width: 60,
            height: 60,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: earned
                  ? AppTheme.divineGoldLight.withOpacity(0.6)
                  : AppTheme.offWhite,
            ),
            child: Center(
              child: Text(
                badge["icon"] as String,
                style: TextStyle(
                  fontSize: 32,
                  color: earned ? null : AppTheme.dividerColor.withOpacity(0.5),
                ),
              ),
            ),
          ),
          const SizedBox(height: 8),
          Text(
            badge["label"] as String,
            style: GoogleFonts.nunito(
              fontSize: 13,
              fontWeight: FontWeight.w700,
              color: earned ? AppTheme.textPrimary : AppTheme.textMuted,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 2),
          Text(
            badge["desc"] as String,
            style: GoogleFonts.nunito(
              fontSize: 10,
              color: AppTheme.textMuted,
              fontWeight: FontWeight.w500,
            ),
            textAlign: TextAlign.center,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
          ),
          if (earned)
            Container(
              margin: const EdgeInsets.only(top: 6),
              padding: const EdgeInsets.symmetric(
                horizontal: 10,
                vertical: 3,
              ),
              decoration: BoxDecoration(
                color: AppTheme.successGreen,
                borderRadius: BorderRadius.circular(10),
              ),
              child: Text(
                "Earned ✓",
                style: GoogleFonts.nunito(
                  fontSize: 10,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.white,
                ),
              ),
            ),
        ],
      ),
    );
  }
}
