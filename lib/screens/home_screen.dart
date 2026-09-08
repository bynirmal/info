import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:bala_aksharam/utils/app_theme.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final isCompact = MediaQuery.of(context).size.width < 760;

    final projects = [
      _Project(
        name: 'RelayFlow',
        tag: 'Hackathon prototype',
        kind: 'Product + UX',
        summary:
            'Built a campus event coordination tool that simplified registration, reminders, and team networking for student organizers.',
        outcome:
            'Semifinalist in my first hackathon and a full prototype that worked end-to-end.',
        accent: AppTheme.cyan,
      ),
      _Project(
        name: 'LaunchPad Studio',
        tag: 'Client website',
        kind: 'Web development',
        summary:
            'Shipped a portfolio website for a small business with a clearer service story, stronger calls to action, and cleaner lead capture.',
        outcome:
            'Delivered a fast, responsive front-end with reusable components and a stronger content hierarchy.',
        accent: AppTheme.amber,
      ),
      _Project(
        name: 'StudyLoop',
        tag: 'Android learning app',
        kind: 'Mobile learning',
        summary:
            'Explored a mobile-first study tracker with progress states, habit streaks, and a simple interview-prep flow for daily practice.',
        outcome:
            'Used Flutter and Android Studio to learn app structure, state, and real-world product decisions.',
        accent: AppTheme.coral,
      ),
    ];

    final tools = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Flutter',
      'Android Studio',
      'GitHub',
      'Firebase',
      'DSA',
      'Problem solving',
    ];

    return Scaffold(
      backgroundColor: AppTheme.ink,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: EdgeInsets.symmetric(
            horizontal: isCompact ? 20 : 64,
            vertical: isCompact ? 24 : 32,
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _buildHeader(),
              const SizedBox(height: 28),
              _buildHero(isCompact),
              const SizedBox(height: 48),
              _buildSectionHeader('About', '01'),
              const SizedBox(height: 20),
              _buildAboutCard(),
              const SizedBox(height: 48),
              _buildSectionHeader('Selected work', '02'),
              const SizedBox(height: 20),
              ...projects
                  .map((project) => Padding(
                        padding: const EdgeInsets.only(bottom: 18),
                        child: _buildProjectCard(project),
                      ))
                  .toList(),
              const SizedBox(height: 48),
              _buildSectionHeader('Tools', '03'),
              const SizedBox(height: 20),
              _buildTools(tools),
              const SizedBox(height: 48),
              _buildContactSection(),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHeader() {
    return SizedBox(
      width: double.infinity,
      child: Row(
        children: [
          Container(
            width: 42,
            height: 42,
            decoration: BoxDecoration(
              color: AppTheme.cyan.withOpacity(0.14),
              border: Border.all(color: AppTheme.cyan.withOpacity(0.4)),
              borderRadius: BorderRadius.circular(12),
            ),
            child: Center(
              child: Text(
                'NK',
                style: GoogleFonts.jetBrainsMono(
                  color: AppTheme.cyan,
                  fontWeight: FontWeight.w700,
                  fontSize: 15,
                ),
              ),
            ),
          ),
          const SizedBox(width: 14),
          Text(
            'Nirmal Kumar',
            style: GoogleFonts.manrope(
              color: AppTheme.ivory,
              fontWeight: FontWeight.w700,
              fontSize: 20,
            ),
          ),
          const Spacer(),
          Row(
            children: [
              _navItem('About'),
              const SizedBox(width: 20),
              _navItem('Work'),
              const SizedBox(width: 20),
              _navItem('Contact'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _navItem(String label) {
    return Text(
      label,
      style: GoogleFonts.manrope(
        color: AppTheme.mist,
        fontWeight: FontWeight.w500,
        fontSize: 14,
      ),
    );
  }

  Widget _buildHero(bool isCompact) {
    return Container(
      padding: EdgeInsets.all(isCompact ? 20 : 28),
      decoration: BoxDecoration(
        color: AppTheme.panel,
        border: Border.all(color: AppTheme.border),
        borderRadius: BorderRadius.circular(30),
      ),
      child: isCompact
          ? Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                _buildHeroText(),
                const SizedBox(height: 20),
                _buildHeroPanel(),
              ],
            )
          : Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Expanded(child: _buildHeroText()),
                const SizedBox(width: 20),
                SizedBox(width: 320, child: _buildHeroPanel()),
              ],
            ),
    );
  }

  Widget _buildHeroText() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          decoration: BoxDecoration(
            color: AppTheme.cyan.withOpacity(0.1),
            borderRadius: BorderRadius.circular(999),
            border: Border.all(color: AppTheme.cyan.withOpacity(0.22)),
          ),
          child: Text(
            'B.Tech student • web developer • Android learner',
            style: GoogleFonts.jetBrainsMono(
              color: AppTheme.cyan,
              fontSize: 12,
              letterSpacing: 0.4,
            ),
          ),
        ),
        const SizedBox(height: 18),
        Text(
          'I build software that moves from idea to shipped product.',
          style: GoogleFonts.manrope(
            color: AppTheme.ivory,
            fontSize: 42,
            height: 0.95,
            fontWeight: FontWeight.w800,
          ),
        ),
        const SizedBox(height: 16),
        Text(
          'I’m Nirmal Kumar — a B.Tech student building real software, learning Android in Android Studio, and sharpening my fundamentals in DSA while I ship projects that matter.',
          style: GoogleFonts.manrope(
            color: AppTheme.mist,
            fontSize: 17,
            height: 1.7,
            fontWeight: FontWeight.w500,
          ),
        ),
        const SizedBox(height: 24),
        Row(
          children: [
            _actionChip('View selected work', AppTheme.cyan),
            const SizedBox(width: 12),
            _actionChip('say hello', AppTheme.amber),
          ],
        ),
      ],
    );
  }

  Widget _actionChip(String label, Color accent) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      decoration: BoxDecoration(
        color: accent.withOpacity(0.12),
        border: Border.all(color: accent.withOpacity(0.45)),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        label,
        style: GoogleFonts.manrope(
          color: AppTheme.ivory,
          fontWeight: FontWeight.w700,
          fontSize: 13,
        ),
      ),
    );
  }

  Widget _buildHeroPanel() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppTheme.inkSoft,
        border: Border.all(color: AppTheme.border),
        borderRadius: BorderRadius.circular(22),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'current stack',
            style: GoogleFonts.jetBrainsMono(
              color: AppTheme.textMuted,
              fontSize: 11,
            ),
          ),
          const SizedBox(height: 16),
          _codeLine('frontend', 'React / Next / Flutter'),
          const SizedBox(height: 10),
          _codeLine('mobile', 'Android Studio / Java / Kotlin'),
          const SizedBox(height: 10),
          _codeLine('core', 'DSA / system thinking / product'),
          const SizedBox(height: 20),
          Divider(color: AppTheme.border),
          const SizedBox(height: 16),
          Row(
            children: [
              _metric('03', 'active builds'),
              const SizedBox(width: 18),
              _metric('01', 'hackathon finalist'),
            ],
          ),
        ],
      ),
    );
  }

  Widget _codeLine(String label, String value) {
    return Row(
      children: [
        Text(
          label,
          style: GoogleFonts.jetBrainsMono(
            color: AppTheme.amber,
            fontSize: 12,
          ),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Text(
            value,
            style: GoogleFonts.manrope(
              color: AppTheme.ivory,
              fontWeight: FontWeight.w600,
              fontSize: 13,
            ),
          ),
        ),
      ],
    );
  }

  Widget _metric(String number, String label) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          number,
          style: GoogleFonts.manrope(
            color: AppTheme.ivory,
            fontWeight: FontWeight.w800,
            fontSize: 28,
          ),
        ),
        Text(
          label,
          style: GoogleFonts.manrope(
            color: AppTheme.textMuted,
            fontSize: 12,
          ),
        ),
      ],
    );
  }

  Widget _buildSectionHeader(String label, String index) {
    return Row(
      children: [
        Text(
          index,
          style: GoogleFonts.jetBrainsMono(
            color: AppTheme.cyan,
            fontWeight: FontWeight.w700,
            fontSize: 12,
          ),
        ),
        const SizedBox(width: 10),
        Text(
          label,
          style: GoogleFonts.manrope(
            color: AppTheme.ivory,
            fontWeight: FontWeight.w700,
            fontSize: 28,
          ),
        ),
      ],
    );
  }

  Widget _buildAboutCard() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: AppTheme.panelAlt,
        border: Border.all(color: AppTheme.border),
        borderRadius: BorderRadius.circular(26),
      ),
      child: Text(
        'I’m currently a B.Tech student building software instead of just studying it. I build portfolio and information websites as a web developer, and I’m learning Android development in Android Studio to move into mobile. I keep an active GitHub with ongoing work and I’m intentionally strengthening my DSA and problem-solving fundamentals alongside the building. I learn by shipping real-world projects, not by watching tutorials from a distance. My long-term goal is to become a software engineer and eventually build my own products and company.',
        style: GoogleFonts.manrope(
          color: AppTheme.mist,
          fontSize: 18,
          height: 1.8,
        ),
      ),
    );
  }

  Widget _buildProjectCard(_Project project) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(22),
      decoration: BoxDecoration(
        color: AppTheme.panel,
        border: Border.all(color: AppTheme.border),
        borderRadius: BorderRadius.circular(24),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                decoration: BoxDecoration(
                  color: project.accent.withOpacity(0.12),
                  borderRadius: BorderRadius.circular(999),
                  border: Border.all(color: project.accent.withOpacity(0.4)),
                ),
                child: Text(
                  project.tag,
                  style: GoogleFonts.jetBrainsMono(
                    color: project.accent,
                    fontSize: 10,
                    letterSpacing: 0.6,
                  ),
                ),
              ),
              const Spacer(),
              Text(
                project.kind,
                style: GoogleFonts.manrope(
                  color: AppTheme.textMuted,
                  fontWeight: FontWeight.w600,
                  fontSize: 12,
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Text(
            project.name,
            style: GoogleFonts.manrope(
              color: AppTheme.ivory,
              fontWeight: FontWeight.w800,
              fontSize: 30,
            ),
          ),
          const SizedBox(height: 12),
          Text(
            project.summary,
            style: GoogleFonts.manrope(
              color: AppTheme.mist,
              fontSize: 16,
              height: 1.7,
            ),
          ),
          const SizedBox(height: 12),
          Text(
            project.outcome,
            style: GoogleFonts.manrope(
              color: AppTheme.ivory,
              fontSize: 15,
              fontWeight: FontWeight.w600,
              height: 1.6,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTools(List<String> tools) {
    return Wrap(
      spacing: 12,
      runSpacing: 12,
      children: tools
          .map((tool) => Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                decoration: BoxDecoration(
                  color: AppTheme.panel,
                  borderRadius: BorderRadius.circular(999),
                  border: Border.all(color: AppTheme.border),
                ),
                child: Text(
                  tool,
                  style: GoogleFonts.manrope(
                    color: AppTheme.ivory,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ))
          .toList(),
    );
  }

  Widget _buildContactSection() {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        color: AppTheme.panel,
        border: Border.all(color: AppTheme.border),
        borderRadius: BorderRadius.circular(24),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Contact',
            style: GoogleFonts.manrope(
              color: AppTheme.ivory,
              fontWeight: FontWeight.w800,
              fontSize: 28,
            ),
          ),
          const SizedBox(height: 12),
          Text(
            'I’m open to internships, freelance work, and product conversations. If there is something worth building, I want to be in the room.',
            style: GoogleFonts.manrope(
              color: AppTheme.mist,
              fontSize: 17,
              height: 1.7,
            ),
          ),
          const SizedBox(height: 20),
          Wrap(
            spacing: 12,
            runSpacing: 12,
            children: [
              _actionChip('nirmal.kumar.dev@gmail.com', AppTheme.cyan),
              _actionChip('github.com/nirmal', AppTheme.amber),
            ],
          ),
        ],
      ),
    );
  }
}

class _Project {
  const _Project({
    required this.name,
    required this.tag,
    required this.kind,
    required this.summary,
    required this.outcome,
    required this.accent,
  });

  final String name;
  final String tag;
  final String kind;
  final String summary;
  final String outcome;
  final Color accent;
}
