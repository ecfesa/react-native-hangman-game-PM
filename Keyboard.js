// Keyboard.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Keyboard = ({ onKeyPress, guessedLetters }) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return (
    <View style={styles.container}>
      {letters.map((letter) => (
        <TouchableOpacity
          key={letter}
          style={[
            styles.key,
            guessedLetters.includes(letter) && styles.disabledKey
          ]}
          onPress={() => onKeyPress(letter)}
          disabled={guessedLetters.includes(letter)}
        >
          <Text style={styles.keyText}>{letter}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 10,
  },
  key: {
    width: 50,
    height: 50,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 3,
  },
  disabledKey: {
    backgroundColor: '#999',
  },
  keyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Keyboard;