// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import HangmanFigure from './HangmanFigure';
import WordDisplay from './WordDisplay';
import Keyboard from './Keyboard';
import AccentedKeyboard from './AccentedKeyboard';
import { getRandomWord } from './Words';

export default function App() {
  const [currentWord, setCurrentWord] = useState(null);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [errors, setErrors] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [lastWord, setLastWord] = useState('');
  const [showAccentedKeyboard, setShowAccentedKeyboard] = useState(false);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newWord = getRandomWord(lastWord);
    setCurrentWord(newWord);
    setLastWord(newWord?.word || '');
    setGuessedLetters([]);
    setErrors(0);
    setGameOver(false);
  };

  const handleKeyPress = (letter) => {
    if (gameOver) return;

    setGuessedLetters([...guessedLetters, letter]);
    
    if (!currentWord.word.includes(letter)) {
      setErrors(errors + 1);
    }
  };

  useEffect(() => {
    if (errors >= 6) {
      setGameOver(true);
    }
  }, [errors]);

  useEffect(() => {
    if (currentWord?.word && currentWord.word.split('').every(letter => guessedLetters.includes(letter))) {
      setGameOver(true);
    }
  }, [guessedLetters]);

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>Dica: {currentWord?.hint}</Text>
      
      <HangmanFigure errors={errors} />
      
      <WordDisplay 
        word={currentWord?.word || ''} 
        guessedLetters={guessedLetters} 
      />

      {!gameOver && (
        <>
          {showAccentedKeyboard ? (
            <AccentedKeyboard
              onKeyPress={handleKeyPress}
              guessedLetters={guessedLetters}
            />
          ) : (
            <Keyboard
              onKeyPress={handleKeyPress}
              guessedLetters={guessedLetters}
            />
          )}
          
          <Button
            title={
              showAccentedKeyboard
                ? "Voltar para Teclado Normal"
                : "Usar Teclado com Acentos"
            }
            onPress={() => setShowAccentedKeyboard(!showAccentedKeyboard)}
          />
        </>
      )}
      
      {gameOver && (
        <View style={styles.gameOver}>
          <Text style={styles.gameOverText}>
            {errors >= 6 ? 'Você perdeu!' : 'Você ganhou!'}
          </Text>
          <Text style={styles.correctWord}>
            Palavra correta: {currentWord?.word}
          </Text>
          <Button title="Jogar novamente" onPress={startNewGame} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  hint: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 90,
    padding: 10
  },
  gameOver: {
    marginTop: 20,
    alignItems: 'center',
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  correctWord: {
    fontSize: 18,
    marginBottom: 10,
  },
});
