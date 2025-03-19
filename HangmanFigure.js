import React from "react";
import { View, StyleSheet, Text } from "react-native";
// o import do text estava vindo de "react-native-svg", por isso não estava apresentando

const HangmanFigureASCII = [
  `
   _________
  |/        |
  |
  |
  |
  |
  |===============`,
  `
   _________
  |/        |
  |         O
  |
  |
  |
  |===============`,
  `
   _________
  |/        |
  |         O
  |         |
  |         |
  |
  |===============`,
  `
   _________
  |/        |
  |         O
  |        /|
  |         |
  |
  |===============`,
  `
   _________
  |/        |
  |         O
  |        /|\\
  |         |
  |
  |===============`,
  `
   _________
  |/        |
  |         O
  |        /|\\
  |         |
  |        /
  |===============`,
  `
   _________
  |/        |
  |         O
  |        /|\\
  |         |
  |        / \\
  |===============`,
  `
   _________
  |/        |
  |       __O__
  |        /|\\
  |         |
  |        / \\
  |===============`
];

const HangmanFigure = ({ errors }) => {
  const asciiArt = HangmanFigureASCII[errors];

  return (
    <View style={styles.container}>
      <Text style={styles.asciiText}>
        {asciiArt}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "150",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 90,
    borderStyle: 'dashed',
    borderColor: 'white'
  },
  asciiText: {
    fontFamily: "monospace",
    fontSize: 20,
    color: "white",
    textAlign: "left",
    lineHeight: 20,
  }
});

export default HangmanFigure;

