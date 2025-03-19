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
    width: 50,
    height: 50,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'white'
  },
  disabledKey: {
    backgroundColor: '#999',
  },
  keyText: {
    fontSize: 20,
    fontFamily: 'monospace',
    color : 'white'
  },
});

export default AccentedKeyboard;
