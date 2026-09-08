import "dart:math";
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:confetti/confetti.dart";
import "package:bala_aksharam/data/quiz_data.dart";
import "package:bala_aksharam/utils/app_theme.dart";

enum QuizState { welcome, playing, finished }

class QuizScreen extends StatefulWidget {
  const QuizScreen({super.key});

  @override
  State<QuizScreen> createState() => _QuizScreenState();
}

class _QuizScreenState extends State<QuizScreen> {
  late ConfettiController _confettiController;
  QuizState _state = QuizState.welcome;
  int _currentIndex = 0;
  int _score = 0;
  final List<int> _order = [];
  int _selectedAnswer = -1;
  bool _answered = false;
  bool _isCorrect = false;

  @override
  void initState() {
    super.initState();
    _confettiController = ConfettiController(duration: const Duration(seconds: 4));
    _buildOrder();
  }

  void _buildOrder() {
    _order.clear();
    _order.addAll(List.generate(quizQuestions.length, (i) => i));
    _order.shuffle(Random());
  }

  void _startQuiz() {
    setState(() {
      _currentIndex = 0;
      _score = 0;
      _state = QuizState.playing;
      _selectedAnswer = -1;
      _answered = false;
    });
  }

  void _onAnswer(int index) {
    if (_answered) return;
    final q = quizQuestions[_order[_currentIndex]];
    setState(() {
      _selectedAnswer = index;
      _answered = true;
      _isCorrect = index == q.correctIndex;
    });
    if (_isCorrect) {
      setState(() => _score++);
    }
    Future.delayed(const Duration(milliseconds: 1600), () {
      if (_currentIndex >= 9 || _currentIndex + 1 >= 10) {
        setState(() => _state = QuizState.finished);
        if (_score >= 7) _confettiController.play();
      } else {
        setState(() {
          _currentIndex++;
          _selectedAnswer = -1;
          _answered = false;
          _isCorrect = false;
        });
      }
    });
  }

  void _restartQuiz() {
    setState(() {
      _state = QuizState.welcome;
      _buildOrder();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Quiz Time 🧠"),
        backgroundColor: AppTheme.peacockGreen,
      ),
      body: Stack(
        children: [
          _buildBody(),
          if (_state == QuizState.finished && _score >= 7)
            Positioned.fill(
              child: ConfettiWidget(
                confettiController: _confettiController,
                blastDirectionality: BlastDirectionality.explosive,
                colors: [
                  AppTheme.primarySaffron,
                  AppTheme.divineGold,
                  AppTheme.lotusPink,
                  AppTheme.peacockGreen,
                  AppTheme.primaryKrishna,
                ],
              ),
            ),
        ],
      ),
    );
  }

  Widget _buildBody() {
    switch (_state) {
      case QuizState.welcome:
        return _buildWelcome();
      case QuizState.playing:
        return _buildPlaying();
      case QuizState.finished:
        return _buildFinished();
    }
  }

  Widget _buildWelcome() {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(32),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              padding: const EdgeInsets.all(24),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: AppTheme.peacockGreen.withOpacity(0.1),
              ),
              child: const Text("🧠", style: TextStyle(fontSize: 80)),
            ),
            const SizedBox(height: 24),
            Text(
              "Mythology Quiz",
              style: GoogleFonts.nunito(
                fontSize: 28,
                fontWeight: FontWeight.w800,
                color: AppTheme.textPrimary,
              ),
            ),
            const SizedBox(height: 12),
            Text(
              "Test your knowledge of Ramayana & Purana!\n10 questions · Stars for every correct answer",
              textAlign: TextAlign.center,
              style: GoogleFonts.nunito(
                fontSize: 15,
                color: AppTheme.textMuted,
                height: 1.6,
              ),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: _startQuiz,
              style: ElevatedButton.styleFrom(
                backgroundColor: AppTheme.peacockGreen,
                padding: const EdgeInsets.symmetric(
                  horizontal: 40,
                  vertical: 16,
                ),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(24),
                ),
              ),
              child: Text(
                "Start Quiz",
                style: GoogleFonts.nunito(
                  fontSize: 18,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildPlaying() {
    final question = quizQuestions[_order[_currentIndex]];
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          LinearProgressIndicator(
            value: (_currentIndex + 1) / 10,
            backgroundColor: AppTheme.offWhite,
            color: AppTheme.peacockGreen,
            minHeight: 8,
            borderRadius: BorderRadius.circular(4),
          ),
          const SizedBox(height: 8),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(
                "Q ${_currentIndex + 1}/10",
                style: GoogleFonts.nunito(
                  fontWeight: FontWeight.w600,
                  color: AppTheme.textMuted,
                ),
              ),
              Text(
                "Score: $_score",
                style: GoogleFonts.nunito(
                  fontWeight: FontWeight.w700,
                  color: AppTheme.peacockGreen,
                ),
              ),
            ],
          ),
          const SizedBox(height: 20),
          Container(
            padding: const EdgeInsets.all(20),
            decoration: BoxDecoration(
              color: AppTheme.white,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(
                color: _answered
                    ? _isCorrect
                        ? AppTheme.successGreen
                        : AppTheme.errorRed
                    : AppTheme.peacockGreen.withOpacity(0.3),
                width: _answered ? 2.5 : 1.5,
              ),
              boxShadow: [
                BoxShadow(
                  color: AppTheme.peacockGreen.withOpacity(0.1),
                  blurRadius: 12,
                ),
              ],
            ),
            child: Text(
              question.question,
              style: GoogleFonts.nunito(
                fontSize: 18,
                fontWeight: FontWeight.w700,
                color: AppTheme.textPrimary,
                height: 1.5,
              ),
            ),
          ),
          const Spacer(),
          ...List.generate(question.options.length, (i) {
            final isSelected = _selectedAnswer == i;
            final shouldHighlight = _answered && i == question.correctIndex;
            return Padding(
              padding: EdgeInsets.only(
                bottom: i < question.options.length - 1 ? 12.0 : 0,
              ),
              child: Material(
                color: _answered
                    ? shouldHighlight
                        ? AppTheme.successGreen.withOpacity(0.15)
                        : isSelected
                            ? AppTheme.errorRed.withOpacity(0.1)
                            : AppTheme.offWhite
                    : AppTheme.offWhite,
                borderRadius: BorderRadius.circular(16),
                child: InkWell(
                  onTap: () => _onAnswer(i),
                  borderRadius: BorderRadius.circular(16),
                  child: Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 20,
                      vertical: 16,
                    ),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      border: Border.all(
                        color: _answered
                            ? shouldHighlight
                                ? AppTheme.successGreen
                                : isSelected
                                    ? AppTheme.errorRed.withOpacity(0.4)
                                    : AppTheme.dividerColor
                            : AppTheme.peacockGreen.withOpacity(0.3),
                        width: 1.5,
                      ),
                    ),
                    child: Row(
                      children: [
                        Container(
                          width: 34,
                          height: 34,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: _answered
                                ? shouldHighlight
                                    ? AppTheme.successGreen
                                    : isSelected
                                        ? AppTheme.errorRed.withOpacity(0.4)
                                        : AppTheme.dividerColor
                                : AppTheme.peacockGreen.withOpacity(0.15),
                          ),
                          child: Center(
                            child: Text(
                              String.fromCharCode(
                                65 + i,
                              ),
                              style: GoogleFonts.nunito(
                                fontWeight: FontWeight.w700,
                                fontSize: 15,
                                color: _answered
                                    ? (shouldHighlight
                                        ? AppTheme.white
                                        : isSelected
                                            ? AppTheme.errorRed
                                            : AppTheme.white)
                                    : AppTheme.peacockGreen,
                              ),
                            ),
                          ),
                        ),
                        const SizedBox(width: 14),
                        Expanded(
                          child: Text(
                            question.options[i],
                            style: GoogleFonts.nunito(
                              fontSize: 16,
                              fontWeight: FontWeight.w600,
                              color: _answered
                                  ? shouldHighlight
                                      ? AppTheme.successGreen
                                      : isSelected
                                          ? AppTheme.errorRed.withOpacity(0.7)
                                          : AppTheme.textMuted
                                  : AppTheme.textPrimary,
                            ),
                          ),
                        ),
                        if (_answered)
                          Icon(
                            shouldHighlight
                                ? Icons.check_circle_rounded
                                : isSelected
                                    ? Icons.cancel_rounded
                                    : Icons.help_outline_rounded,
                            color: shouldHighlight
                                ? AppTheme.successGreen
                                : isSelected
                                    ? AppTheme.errorRed.withOpacity(0.5)
                                    : AppTheme.textMuted,
                            size: 22,
                          ),
                      ],
                    ),
                  ),
                ),
              ),
            );
          }),
          const SizedBox(height: 12),
        ],
      ),
    );
  }

  Widget _buildFinished() {
    final stars = _score >= 9
        ? "⭐⭐⭐"
        : _score >= 7
            ? "⭐⭐"
            : _score >= 5
                ? "⭐"
                : "";
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(32),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(stars, style: const TextStyle(fontSize: 60)),
            const SizedBox(height: 12),
            Text(
              _score >= 7 ? "Excellent!" : _score >= 5 ? "Good Try!" : "Keep Practising!",
              style: GoogleFonts.nunito(
                fontSize: 32,
                fontWeight: FontWeight.w800,
                color: _score >= 7
                    ? AppTheme.peacockGreen
                    : AppTheme.primarySaffron,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              "You scored $_score out of 10!",
              style: GoogleFonts.nunito(
                fontSize: 18,
                color: AppTheme.textMuted,
                fontWeight: FontWeight.w600,
              ),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: _restartQuiz,
              style: ElevatedButton.styleFrom(
                backgroundColor: AppTheme.peacockGreen,
                padding: const EdgeInsets.symmetric(
                  horizontal: 32,
                  vertical: 14,
                ),
              ),
              child: Text(
                "Play Again",
                style: GoogleFonts.nunito(
                  fontSize: 16,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
