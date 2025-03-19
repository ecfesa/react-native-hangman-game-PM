// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
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
      <Text style={[styles.hint, styles.dashedStyleText]}>Dica: {currentWord?.hint}</Text>
      
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
          
          <TouchableOpacity style={styles.dashedStyle} onPress={() => setShowAccentedKeyboard(!showAccentedKeyboard)}>
          {
            showAccentedKeyboard ? (
                <Text style={styles.dashedStyleText}>Voltar para Teclado Normal</Text>
            ) : (
                <Text style={styles.dashedStyleText}>Usar Teclado com Acentos</Text>
            )
          }
          </TouchableOpacity>
        </>
      )}
      
      {gameOver && (
        <View style={styles.gameOver}>
          <Text style={[styles.gameOverText, styles.dashedStyleText]}>
            {errors >= 6 ? 'Você perdeu!' : 'Você ganhou!'}
          </Text>
          <Text style={[styles.correctWord, styles.dashedStyleText]}>
            Palavra correta: {currentWord?.word}
          </Text>
          <TouchableOpacity style={styles.dashedStyle}onPress={startNewGame}>
            <Text style={styles.dashedStyleText}> Jogar Novamente </Text>
          </TouchableOpacity>
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
    backgroundColor : 'black'
  },
  hint: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 90,
    borderStyle: 'dashed',
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
  dashedStyle: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'white'
  },
  dashedStyleText: {
    color: 'white',
    fontFamily: 'monospace'
  }
});
