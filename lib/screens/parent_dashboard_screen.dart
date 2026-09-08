import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class ParentDashboardScreen extends StatefulWidget {
  const ParentDashboardScreen({super.key});

  @override
  State<ParentDashboardScreen> createState() => _ParentDashboardScreenState();
}

class _ParentDashboardScreenState extends State<ParentDashboardScreen> {
  double _limitMinutes = 60;
  bool _soundEnabled = true;
  bool _musicEnabled = true;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Parent Dashboard", style: GoogleFonts.nunito()),
        backgroundColor: AppTheme.sandalwood,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            _buildChildCard(),
            const SizedBox(height: 20),
            _buildStatsCard(),
            const SizedBox(height: 20),
            _buildSettingsCard(),
          ],
        ),
      ),
    );
  }

  Widget _buildChildCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          colors: [
            AppTheme.sandalwood,
            AppTheme.primarySaffron,
          ],
        ),
        borderRadius: BorderRadius.circular(24),
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
              Icons.child_care_rounded,
              size: 34,
              color: AppTheme.sandalwood,
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "Little Rishi",
                  style: GoogleFonts.nunito(
                    fontSize: 22,
                    fontWeight: FontWeight.w800,
                    color: AppTheme.white,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  "Level 5 · 340 Stars · 7 Day Streak 🔥",
                  style: GoogleFonts.nunito(
                    fontSize: 13,
                    color: AppTheme.offWhite,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildStatsCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppTheme.white,
        borderRadius: BorderRadius.circular(22),
        boxShadow: [
          BoxShadow(
            color: AppTheme.sandalwood.withOpacity(0.1),
            blurRadius: 12,
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Learning Progress",
            style: GoogleFonts.nunito(
              fontSize: 16,
              fontWeight: FontWeight.w700,
              color: AppTheme.textPrimary,
            ),
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: _progressCircle("A–Z", "18/26", AppTheme.primarySaffron),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: _progressCircle(
                  "Stories",
                  "12/18",
                  AppTheme.lotusPink,
                ),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: _progressCircle(
                  "Sanskrit Words",
                  "14",
                  AppTheme.peacockGreen,
                ),
              ),
            ],
          ),
          const SizedBox(height: 20),
          Text(
            "Weekly Performance",
            style: GoogleFonts.nunito(
              fontSize: 15,
              fontWeight: FontWeight.w700,
              color: AppTheme.textPrimary,
            ),
          ),
          const SizedBox(height: 14),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: List.generate(7, (i) {
              final labels = ["M", "T", "W", "T", "F", "S", "S"];
              final values = [3, 5, 4, 7, 6, 8, 5];
              return Column(
                children: [
                  Container(
                    width: 24,
                    height: values[i] * 10 + 10,
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        colors: [
                          AppTheme.primarySaffron,
                          AppTheme.lotusPink.withOpacity(0.4),
                        ],
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                      ),
                      borderRadius: BorderRadius.circular(8),
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    labels[i],
                    style: GoogleFonts.nunito(
                      fontSize: 11,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.textMuted,
                    ),
                  ),
                ],
              );
            }),
          ),
        ],
      ),
    );
  }

  Widget _progressCircle(String label, String value, Color color) {
    return Column(
      children: [
        SizedBox(
          width: 70,
          height: 70,
          child: Stack(
            alignment: Alignment.center,
            children: [
              SizedBox(
                width: 60,
                height: 60,
                child: CircularProgressIndicator(
                  strokeWidth: 6,
                  value: value.contains("14") || value.contains("6") 
                      ? (label == "Sanskrit Words" ? 14.0 / 26.0 : 0.54) 
                      : (label == "A–Z" ? 18.0 / 26 : 12.0 / 18.0),
                  backgroundColor: color.withOpacity(0.18),
                  valueColor: AlwaysStoppedAnimation(color),
                ),
              ),
              FittedBox(
                fit: BoxFit.scaleDown,
                child: Text(
                  value,
                  style: GoogleFonts.nunito(
                    fontWeight: FontWeight.w800,
                    color: color,
                    fontSize: 15,
                  ),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 6),
        Text(
          label,
          style: GoogleFonts.nunito(
            fontSize: 11,
            fontWeight: FontWeight.w700,
            color: AppTheme.textMuted,
          ),
        ),
      ],
    );
  }

  Widget _buildSettingsCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppTheme.white,
        borderRadius: BorderRadius.circular(22),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            "Parent Controls",
            style: GoogleFonts.nunito(
              fontSize: 16,
              fontWeight: FontWeight.w700,
              color: AppTheme.textPrimary,
            ),
          ),
          const SizedBox(height: 14),
          _settingTile(
            "Sound Effects",
            _soundEnabled,
            (v) => setState(() => _soundEnabled = v),
          ),
          _settingTile(
            "Devotional Music",
            _musicEnabled,
            (v) => setState(() => _musicEnabled = v),
          ),
          const SizedBox(height: 12),
          Text(
            "Daily Time Limit",
            style: GoogleFonts.nunito(
              fontSize: 13,
              fontWeight: FontWeight.w700,
              color: AppTheme.textPrimary,
            ),
          ),
          Slider(
            min: 15,
            max: 180,
            divisions: 11,
            value: _limitMinutes,
            activeColor: AppTheme.primarySaffron,
            onChanged: (val) => setState(() => _limitMinutes = val),
          ),
          Center(
            child: Text(
              "${_limitMinutes.round()} minutes/day",
              style: GoogleFonts.nunito(
                fontWeight: FontWeight.w700,
                color: AppTheme.sandalwood,
              ),
            ),
          ),
          const SizedBox(height: 12),
          Row(
            children: [
              Expanded(
                child: OutlinedButton(
                  onPressed: () {},
                  style: OutlinedButton.styleFrom(
                    side: BorderSide(color: AppTheme.primarySaffron),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: const Text("Export Progress"),
                ),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.primarySaffron,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(16),
                    ),
                  ),
                  child: const Text("Not Sure You Can?"),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _settingTile(
    String label,
    bool value,
    Function(bool) onChanged,
  ) {
    return SwitchListTile(
      title: Text(
        label,
        style: GoogleFonts.nunito(
          fontWeight: FontWeight.w600,
          color: AppTheme.textPrimary,
        ),
      ),
      value: value,
      onChanged: onChanged,
      activeColor: AppTheme.primarySaffron,
      dense: true,
      contentPadding: EdgeInsets.zero,
    );
  }
}
