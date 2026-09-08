import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:bala_aksharam/data/daily_quotes.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  String _language = "English";
  bool _devotionalMusic = true;
  bool _dailyNotif = true;
  bool _soundEffects = true;
  bool _nightMode = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Settings", style: GoogleFonts.nunito()),
        backgroundColor: AppTheme.primaryKrishna,
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            _buildSection("Language & Speech"),
            _buildTile(
              icon: Icons.flag_rounded,
              label: "App Language",
              value: _language,
              onTap: () => Navigator.of(context).pushNamed("/language"),
            ),
            _buildTile(
              icon: Icons.hearing_rounded,
              label: "TTS Voice",
              value: "Warm & Clear (Female)",
            ),
            _buildSection("Audio & Notifications"),
            _buildTile(
              icon: Icons.music_note_rounded,
              label: "Devotional Music",
              trailing: Switch(
                value: _devotionalMusic,
                onChanged: (v) => setState(() => _devotionalMusic = v),
                activeColor: AppTheme.primarySaffron,
              ),
            ),
            _buildTile(
              icon: Icons.notifications_active_rounded,
              label: "Daily Reminder",
              trailing: Switch(
                value: _dailyNotif,
                onChanged: (v) => setState(() => _dailyNotif = v),
                activeColor: AppTheme.primarySaffron,
              ),
            ),
            _buildTile(
              icon: Icons.volume_up_rounded,
              label: "Sound Effects",
              trailing: Switch(
                value: _soundEffects,
                onChanged: (v) => setState(() => _soundEffects = v),
                activeColor: AppTheme.primarySaffron,
              ),
            ),
            _buildSection("Appearance"),
            _buildTile(
              icon: Icons.dark_mode_rounded,
              label: "Night Mode",
              trailing: Switch(
                value: _nightMode,
                onChanged: (v) => setState(() => _nightMode = v),
                activeColor: AppTheme.primaryKrishna,
              ),
            ),
            _buildSection("Account"),
            _buildTile(
              icon: Icons.share_rounded,
              label: "Share the App",
              onTap: () {},
            ),
            _buildTile(
              icon: Icons.favorite_border_rounded,
              label: "Rate Us",
              onTap: () {},
            ),
            _buildTile(
              icon: Icons.help_outline_rounded,
              label: "Help & Feedback",
              onTap: () {},
            ),
            const SizedBox(height: 20),
            Text(
              "v1.0.0 · Made in India 🌸",
              style: GoogleFonts.nunito(
                fontSize: 12,
                color: AppTheme.textMuted,
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSection(String title) {
    return Padding(
      padding: const EdgeInsets.only(top: 20, bottom: 8),
      child: Text(
        title,
        style: GoogleFonts.nunito(
          fontSize: 12,
          fontWeight: FontWeight.w700,
          color: AppTheme.textMuted,
          letterSpacing: 0.8,
        ),
      ),
    );
  }

  Widget _buildTile({
    required IconData icon,
    required String label,
    String? value,
    Widget? trailing,
    VoidCallback? onTap,
  }) {
    return Container(
      margin: const EdgeInsets.only(bottom: 4),
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
      decoration: BoxDecoration(
        color: AppTheme.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.dividerColor),
      ),
      child: ListTile(
        leading: Container(
          padding: const EdgeInsets.all(10),
          decoration: BoxDecoration(
            color: AppTheme.primarySaffron.withOpacity(0.1),
            borderRadius: BorderRadius.circular(12),
          ),
          child: Icon(
            icon,
            color: AppTheme.primarySaffron,
            size: 20,
          ),
        ),
        title: Text(
          label,
          style: GoogleFonts.nunito(
            fontWeight: FontWeight.w600,
            color: AppTheme.textPrimary,
            fontSize: 15,
          ),
        ),
        subtitle: value != null
            ? Text(
                value,
                style: GoogleFonts.nunito(
                  fontSize: 12,
                  color: AppTheme.textMuted,
                ),
              )
            : null,
        trailing: trailing ??
            const Icon(
              Icons.chevron_right_rounded,
              color: AppTheme.textMuted,
            ),
        onTap: onTap,
        contentPadding: EdgeInsets.zero,
      ),
    );
  }
}
