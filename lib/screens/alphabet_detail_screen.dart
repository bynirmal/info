import "dart:math";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:audioplayers/audioplayers.dart";
import "package:confetti/confetti.dart";
import "package:bala_aksharam/data/alphabet_data.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class AlphabetDetailScreen extends StatefulWidget {
  final AlphabetData data;

  const AlphabetDetailScreen({
    super.key,
    required this.data,
  });

  @override
  State<AlphabetDetailScreen> createState() => _AlphabetDetailScreenState();
}

class _AlphabetDetailScreenState extends State<AlphabetDetailScreen> {
  final AudioPlayer _player = AudioPlayer();
  bool _isPlaying = false;
  bool _markedLearned = false;

  @override
  void dispose() {
    _player.dispose();
    super.dispose();
  }

  Future<void> _playAudio(String word) async {
    if (_isPlaying) {
      await _player.stop();
    }
    setState(() => _isPlaying = true);
    try {
      await _player.play(AssetSource("audio/${word.toLowerCase()}.mp3"));
    } catch (e) {
      await _player.play(AssetSource("audio/default.mp3"));
    }
    _player.onPlayerComplete.listen((event) {
      if (mounted) setState(() => _isPlaying = false);
    });
  }

  void _showCelebration() {
    final controller = ConfettiController(
      duration: const Duration(seconds: 2),
    );
    showDialog(
      context: context,
      barrierDismissible: true,
      builder: (dialogContext) => Stack(
        children: [
          ConfettiWidget(
            confettiController: controller,
            blastDirectionality: BlastDirectionality.explosive,
            colors: [
              AppTheme.primarySaffron,
              AppTheme.divineGold,
              AppTheme.lotusPink,
              AppTheme.peacockGreen,
              AppTheme.primaryKrishna,
            ],
          ),
          AlertDialog(
            backgroundColor: AppTheme.white,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(30),
            ),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Stack(alignment: Alignment.center, children: [
                  Container(
                    width: 80,
                    height: 80,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: AppTheme.primarySaffron.withOpacity(0.12),
                    ),
                  ),
                  Transform.rotate(
                    angle: -0.1,
                    child: Text("🎉", style: const TextStyle(fontSize: 60)),
                  ),
                ]),
                const SizedBox(height: 16),
                Text(
                  "Great Job!",
                  style: GoogleFonts.nunito(
                    fontSize: 26,
                    fontWeight: FontWeight.w800,
                    color: AppTheme.primarySaffron,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  "You learned ${widget.data.letter} for ${widget.data.word}",
                  textAlign: TextAlign.center,
                  style: GoogleFonts.nunito(
                    fontSize: 15,
                    color: AppTheme.textSecondary,
                    fontWeight: FontWeight.w600,
                  ),
                ),
                const SizedBox(height: 12),
                Container(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 20,
                    vertical: 8,
                  ),
                  decoration: BoxDecoration(
                    color: AppTheme.divineGoldLight.withOpacity(0.5),
                    borderRadius: BorderRadius.circular(20),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(Icons.star_rounded, color: AppTheme.divineGold),
                      const SizedBox(width: 6),
                      Text(
                        "+${widget.data.scoreReward} Stars",
                        style: GoogleFonts.nunito(
                          fontWeight: FontWeight.w700,
                          color: AppTheme.textPrimary,
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 8),
                ElevatedButton(
                  onPressed: () {
                    controller.stop();
                    Navigator.of(dialogContext).pop();
                  },
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppTheme.primarySaffron,
                    foregroundColor: AppTheme.white,
                  ),
                  child: const Text("Awesome!"),
                ),
              ],
            ),
          ),
        ],
      ),
    );
    controller.play();
  }

  void _markAsLearned() {
    setState(() => _markedLearned = true);
    _showCelebration();
  }

  @override
  Widget build(BuildContext context) {
    final data = widget.data;
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [
              AppTheme.lotusCream,
              AppTheme.white,
              AppTheme.lotusPinkLight.withOpacity(0.4),
            ],
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
          ),
        ),
        child: CustomScrollView(
          slivers: [
            SliverAppBar(
              expandedHeight: 180,
              flexibleSpace: Container(
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    colors: [
                      AppTheme.primarySaffron,
                      AppTheme.lotusPinkDark,
                    ],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                ),
                child: FlexibleSpaceBar(
                  title: Text(
                    "${data.letter} — ${data.word}",
                    style: GoogleFonts.nunito(
                      fontWeight: FontWeight.w700,
                      color: AppTheme.white,
                    ),
                  ),
                  centerTitle: false,
                  titlePadding: const EdgeInsets.only(
                    left: 16,
                    bottom: 14,
                  ),
                ),
              ),
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.all(20),
                child: Column(
                  children: [
                    _buildBigLetter(),
                    const SizedBox(height: 24),
                    _buildDescription(),
                    const SizedBox(height: 24),
                    _buildAudioButton(),
                    const SizedBox(height: 28),
                    _buildLearnButton(),
                    const SizedBox(height: 32),
                    _buildCategoryTag(),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildBigLetter() {
    return Container(
      width: 160,
      height: 160,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        gradient: const LinearGradient(
          colors: [
            AppTheme.lotusPink,
            AppTheme.primarySaffron,
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        boxShadow: [
          BoxShadow(
            color: AppTheme.primarySaffron.withOpacity(0.4),
            blurRadius: 30,
            spreadRadius: 4,
          ),
        ],
      ),
      child: Center(
        child: Text(
          widget.data.letter,
          style: GoogleFonts.nunito(
            fontSize: 80,
            fontWeight: FontWeight.w800,
            color: AppTheme.white,
          ),
        ),
      ),
    );
  }

  Widget _buildDescription() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: AppTheme.white,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: AppTheme.primarySaffronLight.withOpacity(0.5)),
        boxShadow: [
          BoxShadow(
            color: AppTheme.primarySaffron.withOpacity(0.07),
            blurRadius: 12,
            offset: const Offset(0, 3),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            widget.data.word,
            style: GoogleFonts.nunito(
              fontSize: 22,
              fontWeight: FontWeight.w700,
              color: AppTheme.primarySaffron,
            ),
          ),
          const SizedBox(height: 4),
          Text(
            widget.data.teluguWord,
            style: GoogleFonts.balooTamma2(
              fontSize: 18,
              color: AppTheme.textSecondary,
            ),
          ),
          const SizedBox(height: 14),
          Text(
            widget.data.description,
            style: GoogleFonts.nunito(
              fontSize: 15,
              color: AppTheme.textPrimary,
              height: 1.6,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAudioButton() {
    return Material(
      color: AppTheme.white,
      borderRadius: BorderRadius.circular(22),
      elevation: 6,
      child: InkWell(
        onTap: () => _playAudio(widget.data.word),
        borderRadius: BorderRadius.circular(22),
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 18, horizontal: 28),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              AnimatedScale(
                scale: _isPlaying ? 1.3 : 1.0,
                duration: const Duration(milliseconds: 300),
                child: Icon(
                  _isPlaying
                      ? Icons.volume_up_rounded
                      : Icons.play_arrow_rounded,
                  size: 28,
                  color: AppTheme.primaryKrishna,
                ),
              ),
              const SizedBox(width: 12),
              Text(
                _isPlaying ? "Playing…" : "Tap to Hear Audio",
                style: GoogleFonts.nunito(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: AppTheme.textPrimary,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildLearnButton() {
    return SizedBox(
      width: double.infinity,
      height: 58,
      child: ElevatedButton(
        onPressed: _markedLearned ? null : _markAsLearned,
        style: ElevatedButton.styleFrom(
          backgroundColor: _markedLearned
              ? AppTheme.primarySaffron.withOpacity(0.4)
              : AppTheme.primarySaffron,
          disabledBackgroundColor: AppTheme.primarySaffron.withOpacity(0.5),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20),
          ),
        ),
        child: Text(
          _markedLearned ? "Learned ✓" : "Mark as Learned",
          style: GoogleFonts.nunito(
            fontSize: 17,
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
    );
  }

  Widget _buildCategoryTag() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(
          Icons.bookmark_border_rounded,
          color: AppTheme.textMuted,
          size: 16,
        ),
        const SizedBox(width: 6),
        Text(
          "Category: ${widget.data.category}",
          style: GoogleFonts.nunito(
            fontSize: 13,
            color: AppTheme.textMuted,
            fontWeight: FontWeight.w600,
          ),
        ),
      ],
    );
  }
}
