import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const accentedLetters = [
  'á', 'à', 'â', 'ã', 'ä',
  'é', 'è', 'ê', 'ë',
  'í', 'ì', 'î', 'ï',
  'ó', 'ò', 'ô', 'õ', 'ö',
  'ú', 'ù', 'û', 'ü',
  'ç'
];

const AccentedKeyboard = ({ onKeyPress, guessedLetters }) => {
  return (
    <View style={styles.container}>
      {accentedLetters.map((letter) => (
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
    width: 40,
    height: 40,
    margin: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  disabledKey: {
    backgroundColor: '#999',
  },
  keyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AccentedKeyboard;