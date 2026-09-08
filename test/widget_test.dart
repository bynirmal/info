// This is a basic Flutter widget test.
//
// To perform an interaction with a widget in your test, use the WidgetTester
// utility in the flutter_test package. For example, you can send tap and scroll
// gestures. You can also use WidgetTester to find child widgets in the widget
// tree, read text, and verify that the values of widget properties are correct.

import 'package:flutter_test/flutter_test.dart';

import 'package:bala_aksharam/app.dart';

void main() {
  testWidgets('portfolio home renders Nirmal Kumar and selected work',
      (WidgetTester tester) async {
    await tester.pumpWidget(const App());
    await tester.pumpAndSettle();

    expect(find.text('Nirmal Kumar'), findsOneWidget);
    expect(find.text('Selected work'), findsOneWidget);
  });
}
