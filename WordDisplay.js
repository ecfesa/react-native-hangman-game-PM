// WordDisplay.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WordDisplay = ({ word, guessedLetters }) => {
  const displayWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'));

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayWord}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  text: {
    fontSize: 25,
    letterSpacing: 10,
    fontWeight: 'bold',
    color : 'white'
  },
});

export default WordDisplay;
