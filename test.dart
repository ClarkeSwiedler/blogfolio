import 'dart:io';

void main() {
  final stopwatch = Stopwatch()..start();
  final deck = List.generate(52, (int index) => index + 1);
  List<int> shuffledDeck = shuffle(deck);
  for (int i = 1; i <= 1500000; i++) {
    shuffledDeck = shuffle(shuffledDeck);
  }
  print(shuffledDeck);
  print(stopwatch.elapsedMilliseconds);
  stdin.readLineSync();
}

List<int> shuffle(List<int> deck) {
  // final deck = List.generate(52, (int index) => index + 1);
  // final otherdeck = [for (int i = 1; i <= 52; i++) i];
  int half = (deck.length / 2).floor();

  List<int> deckA = deck.sublist(0, half);
  List<int> deckB = deck.sublist(half, deck.length);

  final List<int> shuffledDeck = [];

  int level = 0;

  deckA.forEach((card) {
    // shuffledDeck.add(deckB[deckA.indexOf(card)]);
    shuffledDeck.add(deckB[level]);
    shuffledDeck.add(card);
    level++;
  });
  return shuffledDeck;
}
