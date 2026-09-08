class QuizQuestion {
  final String question;
  final List<String> options;
  final int correctIndex;
  final String category;
  final int level;

  const QuizQuestion({
    required this.question,
    required this.options,
    required this.correctIndex,
    required this.category,
    required this.level,
  });

  bool get isMultipleChoice => options.isNotEmpty;
}
