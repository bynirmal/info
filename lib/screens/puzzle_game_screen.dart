import "dart:math";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:confetti/confetti.dart";
import "package:bala_aksharam/utils/app_theme.dart";

class PuzzleGameScreen extends StatefulWidget {
  const PuzzleGameScreen({super.key});

  @override
  State<PuzzleGameScreen> createState() => _PuzzleGameScreenState();
}

class _PuzzleGameScreenState extends State<PuzzleGameScreen> {
  late ConfettiController _confettiController;
  int _moves = 0;
  bool _solved = false;
  final List<int> _shuffled = [];
  static const int _emptyValue = 8;

  static const int gridSize = 3;
  static const List<String> _letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  int get _emptyPos => _shuffled.indexOf(_emptyValue);

  @override
  void initState() {
    super.initState();
    _confettiController = ConfettiController(duration: const Duration(seconds: 3));
    _buildShuffled();
  }

  void _buildShuffled() {
    final base = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    while (true) {
      base.shuffle(Random());
      if (_isSolvable(base)) break;
    }
    setState(() {
      _shuffled.clear();
      _shuffled.addAll(base);
      _moves = 0;
      _solved = false;
    });
  }

  bool _isSolvable(List<int> arr) {
    int inversions = 0;
    final flat = arr.where((e) => e != 8).toList();
    for (int i = 0; i < flat.length; i++) {
      for (int j = i + 1; j < flat.length; j++) {
        if (flat[i] > flat[j]) inversions++;
      }
    }
    final emptyRow = arr.indexOf(8) ~/ gridSize;
    return (inversions + emptyRow) % 2 != 0;
  }

  void _onTileTapped(int index) {
    if (_solved) return;
    final row = index ~/ gridSize;
    final col = index % gridSize;
    if (index == _emptyPos) return;
    final emptyRow = _emptyPos ~/ gridSize;
    final emptyCol = _emptyPos % gridSize;
    final isAdjacent =
        (row == emptyRow && (col - emptyCol).abs() == 1) ||
            (col == emptyCol && (row - emptyRow).abs() == 1);
    if (!isAdjacent) return;
    setState(() {
      _shuffled[_emptyPos] = _shuffled[index];
      _shuffled[index] = _emptyValue;
      _moves++;
    });
    final solved = _shuffled.asMap().entries.every((e) => e.value == e.key);
    if (solved) {
      setState(() => _solved = true);
      _confettiController.play();
      Future.delayed(const Duration(seconds: 3), () {
        if (mounted) _confettiController.stop();
      });
    }
  }

  Widget _buildTile(int index) {
    final val = _shuffled[index];
    final colors = [
      AppTheme.primarySaffron,
      AppTheme.lotusPink,
      AppTheme.primaryKrishna,
      AppTheme.peacockGreen,
      AppTheme.divineGold,
      AppTheme.peacockBlue,
      AppTheme.sandalwood,
      AppTheme.primarySaffronDark,
    ];
    if (val == _emptyValue) {
      return const SizedBox.shrink();
    }
    final color = colors[val % colors.length];
    return GestureDetector(
      onTap: () => _onTileTapped(index),
      child: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(
            colors: [color, color.withOpacity(0.7)],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          ),
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: color.withOpacity(0.35),
              blurRadius: 10,
              offset: const Offset(0, 3),
            ),
          ],
        ),
        child: Center(
          child: FittedBox(
            fit: BoxFit.scaleDown,
            child: Text(
              _letters[val],
              style: GoogleFonts.nunito(
                fontSize: 34,
                fontWeight: FontWeight.w800,
                color: AppTheme.white,
              ),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Puzzle Time"),
        backgroundColor: AppTheme.primaryKrishna,
        actions: [
          TextButton(
            onPressed: _buildShuffled,
            child: const Text("Reset", style: TextStyle(color: AppTheme.white)),
          ),
        ],
      ),
      body: Stack(
        children: [
          ConfettiWidget(
            confettiController: _confettiController,
            blastDirectionality: BlastDirectionality.explosive,
            child: SizedBox.shrink(),
          ),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(20),
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 20,
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
                            fontSize: 15,
                          ),
                        ),
                        Text(
                          _solved ? "Solved!" : "Arrange A–H",
                          style: GoogleFonts.nunito(
                            color: _solved
                                ? AppTheme.successGreen
                                : AppTheme.textMuted,
                            fontWeight: FontWeight.w700,
                            fontSize: 15,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
                const SizedBox(height: 20),
                Expanded(
                  child: AspectRatio(
                    aspectRatio: 1.0,
                    child: GridView.count(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      crossAxisCount: gridSize,
                      mainAxisSpacing: 10,
                      crossAxisSpacing: 10,
                      children: List.generate(9, _buildTile),
                    ),
                  ),
                ),
                if (_solved)
                  ElevatedButton.icon(
                    onPressed: _buildShuffled,
                    icon: const Icon(Icons.refresh_rounded),
                    label: const Text("Play Again"),
                    style: ElevatedButton.styleFrom(
                      backgroundColor: AppTheme.primaryKrishna,
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
