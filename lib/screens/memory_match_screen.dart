import "dart:math";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:confetti/confetti.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class MemoryMatchScreen extends StatefulWidget {
  const MemoryMatchScreen({super.key});

  @override
  State<MemoryMatchScreen> createState() => _MemoryMatchScreenState();
}

class _MemoryMatchScreenState extends State<MemoryMatchScreen>
    with SingleTickerProviderStateMixin {
  late ConfettiController _confettiController;
  late AnimationController _shuffleController;
  int _moves = 0;
  int _matchedPairs = 0;
  int _selectedIdx = -1;
  int _score = 0;
  bool _revealed = false;

  static const _words = [
    "Ayodhya", "Balaramudu", "Chakra", "Hanuman", "Krishna", "🏆", "Sacred Text", "Good Values"
  ];

  @override
  void initState() {
    super.initState();
    _confettiController = ConfettiController(duration: const Duration(seconds: 3));
    _shuffleController = AnimationController(
      duration: const Duration(milliseconds: 400),
      vsync: this,
    );
  }

  void _resetGame() {
    _selectedIdx = -1;
    _matchedPairs = 0;
    _moves = 0;
    _score = 0;
    _revealed = false;
    _shuffleController.forward(from: 0);
  }

  List<Map<String, dynamic>> _buildTiles() {
    final cards = List.generate(
      _words.length,
      (i) => {"index": i, "label": _words[i], "matched": false},
    );
    final firstHalf = cards;
    final doubled = [
      ...firstHalf,
      ...cards.map(
        (c) => Map<String, dynamic>.from(c)
          ..["index"] = (c["index"] as int) + _words.length,
      ),
    ];
    doubled.shuffle(Random());
    return doubled;
  }

  List<Map<String, dynamic>> _tiles = [];
  final List<bool> _flipped = [];

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _tiles = _buildTiles();
    _flipped.length = _tiles.length;
  }

  void _onCardTapped(int index) {
    if (_flipped[index] || _revealed) return;
    setState(() {
      if (_flipped[index]) return;
      _flipped[index] = true;
      if (_selectedIdx == -1) {
        _selectedIdx = index;
      } else {
        _moves++;
        final t = _tiles;
        final a = t[_selectedIdx];
        final b = t[index];
        if (a["index"] % _words.length == b["index"] % _words.length) {
          setState(() {
            _matchedPairs++;
            _score += 20;
            _flipped[_selectedIdx] = true;
            _flipped[index] = true;
            _selectedIdx = -1;
          });
          if (_matchedPairs == _words.length) {
            _showWinDialog();
            _confettiController.play();
          }
        } else {
          _revealed = true;
          Future.delayed(const Duration(milliseconds: 900), () {
            if (mounted) {
              setState(() {
                _flipped[_selectedIdx] = false;
                _flipped[index] = false;
                _selectedIdx = -1;
                _revealed = false;
              });
            }
          });
        }
      }
    });
  }

  void _showWinDialog() {
    showDialog(
      context: context,
      builder: (dialogContext) => AlertDialog(
        backgroundColor: AppTheme.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
        content: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text("🎉", style: TextStyle(fontSize: 60)),
            const SizedBox(height: 12),
            Text(
              "Amazing!",
              style: GoogleFonts.nunito(
                fontSize: 28,
                fontWeight: FontWeight.w800,
                color: AppTheme.primarySaffron,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              "Matched all ${_words.length} pairs in $_moves moves!",
              textAlign: TextAlign.center,
              style: GoogleFonts.nunito(
                fontSize: 14,
                color: AppTheme.textSecondary,
              ),
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _confettiController.stop();
                Navigator.of(dialogContext).pop();
              },
              style: ElevatedButton.styleFrom(
                backgroundColor: AppTheme.primarySaffron,
              ),
              child: const Text("Play Again"),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Memory Match"),
        backgroundColor: AppTheme.primaryKrishna,
      ),
      body: Stack(
        children: [
          Padding(
            padding: const EdgeInsets.all(14),
            child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(18),
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 18,
                      vertical: 10,
                    ),
                    decoration: BoxDecoration(
                      color: AppTheme.primaryKrishna.withOpacity(0.1),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Text(
                          "Moves: $_moves",
                          style: GoogleFonts.nunito(
                            color: AppTheme.primaryKrishna,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        Text(
                          "Matched: $_matchedPairs / ${_words.length}",
                          style: GoogleFonts.nunito(
                            color: AppTheme.peacockGreen,
                            fontWeight: FontWeight.w700,
                          ),
                        ),
                        TextButton(
                          onPressed: _resetGame,
                          child: const Text(
                            "Reset",
                            style: TextStyle(color: AppTheme.sandalwood),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                Expanded(
                  child: GridView.builder(
                    gridDelegate:
                        const SliverGridDelegateWithFixedCrossAxisCount(
                          crossAxisCount: 4,
                          childAspectRatio: 0.82,
                          crossAxisSpacing: 8,
                          mainAxisSpacing: 8,
                        ),
                    itemCount: _tiles.length,
                    itemBuilder: (context, index) {
                      final flipped = _flipped.length > index && _flipped[index];
                      final cardColor = const [
                        AppTheme.primaryKrishna,
                        AppTheme.lotusPink,
                        AppTheme.peacockGreen,
                        AppTheme.primarySaffron,
                        AppTheme.divineGold,
                        AppTheme.peacockBlue,
                      ][index % 6];
                      return GestureDetector(
                        onTap: () => _onCardTapped(index),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 300),
                          decoration: BoxDecoration(
                            gradient: flipped
                                ? LinearGradient(
                                    colors: [
                                      cardColor.withOpacity(0.7),
                                      cardColor.withOpacity(0.5),
                                    ],
                                  )
                                : const LinearGradient(
                                    colors: [
                                      Color(0xFF6D5BA7),
                                      Color(0xFFB06AB3),
                                    ],
                                  ),
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(
                              color: flipped
                                  ? cardColor.withOpacity(0.3)
                                  : AppTheme.lotusPink.withOpacity(0.3),
                              width: 1.5,
                            ),
                          ),
                          child: FittedBox(
                            fit: BoxFit.scaleDown,
                            child: flipped
                                ? Text(
                                    _tiles[index]["label"] as String,
                                    style: GoogleFonts.nunito(
                                      fontWeight: FontWeight.w700,
                                      color: AppTheme.white,
                                      fontSize: 13,
                                    ),
                                  )
                                : const Icon(
                                    Icons.volunteer_activism_rounded,
                                    color: AppTheme.lotusPinkLight,
                                    size: 34,
                                  ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          if (_moves > 0 && _matchedPairs == _words.length)
            Positioned.fill(
              child: ConfettiWidget(
                confettiController: _confettiController,
                blastDirectionality: BlastDirectionality.explosive,
                colors: [
                  AppTheme.primarySaffron,
                  AppTheme.divineGold,
                  AppTheme.lotusPink,
                  AppTheme.peacockGreen,
                ],
              ),
            ),
        ],
      ),
    );
  }
}
