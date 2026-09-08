class UserProgress {
  final String childName;
  final int totalScore;
  final int stars;
  final int currentLevel;
  final Set<String> completedLetters;
  final Set<String> completedStories;
  final int puzzlesCompleted;
  final int quizzesCompleted;
  final int dailyStreak;
  final DateTime? lastActiveDate;
  final List<String> badgesEarned;

  const UserProgress({
    this.childName = "Little One",
    this.totalScore = 0,
    this.stars = 0,
    this.currentLevel = 1,
    this.completedLetters = const {},
    this.completedStories = const {},
    this.puzzlesCompleted = 0,
    this.quizzesCompleted = 0,
    this.dailyStreak = 0,
    this.lastActiveDate,
    this.badgesEarned = const [],
  });

  UserProgress copyWith({
    String? childName,
    int? totalScore,
    int? stars,
    int? currentLevel,
    Set<String>? completedLetters,
    Set<String>? completedStories,
    int? puzzlesCompleted,
    int? quizzesCompleted,
    int? dailyStreak,
    DateTime? lastActiveDate,
    List<String>? badgesEarned,
  }) {
    return UserProgress(
      childName: childName ?? this.childName,
      totalScore: totalScore ?? this.totalScore,
      stars: stars ?? this.stars,
      currentLevel: currentLevel ?? this.currentLevel,
      completedLetters: completedLetters ?? this.completedLetters,
      completedStories: completedStories ?? this.completedStories,
      puzzlesCompleted: puzzlesCompleted ?? this.puzzlesCompleted,
      quizzesCompleted: quizzesCompleted ?? this.quizzesCompleted,
      dailyStreak: dailyStreak ?? this.dailyStreak,
      lastActiveDate: lastActiveDate ?? this.lastActiveDate,
      badgesEarned: badgesEarned ?? this.badgesEarned,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      "childName": childName,
      "totalScore": totalScore,
      "stars": stars,
      "currentLevel": currentLevel,
      "completedLetters": completedLetters.toList(),
      "completedStories": completedStories.toList(),
      "puzzlesCompleted": puzzlesCompleted,
      "quizzesCompleted": quizzesCompleted,
      "dailyStreak": dailyStreak,
      "lastActiveDate": lastActiveDate?.toIso8601String(),
      "badgesEarned": badgesEarned,
    };
  }

  factory UserProgress.fromJson(Map<String, dynamic> json) {
    return UserProgress(
      childName: json["childName"] ?? "Little One",
      totalScore: json["totalScore"] ?? 0,
      stars: json["stars"] ?? 0,
      currentLevel: json["currentLevel"] ?? 1,
      completedLetters: Set<String>.from(json["completedLetters"] ?? []),
      completedStories: Set<String>.from(json["completedStories"] ?? []),
      puzzlesCompleted: json["puzzlesCompleted"] ?? 0,
      quizzesCompleted: json["quizzesCompleted"] ?? 0,
      dailyStreak: json["dailyStreak"] ?? 0,
      lastActiveDate: json["lastActiveDate"] != null
          ? DateTime.parse(json["lastActiveDate"])
          : null,
      badgesEarned: List<String>.from(json["badgesEarned"] ?? []),
    );
  }
}
