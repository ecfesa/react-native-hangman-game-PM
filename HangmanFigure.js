import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Text } from "react-native-svg";

/*
const HangmanFigureASCII = [
  [
    `
    ▛▔▔▔▜
    ▏      ▐
            ▐
            ▐
            ▐
            ▐
    =========
    `
  ],
  [
    "+---+",
    "|   |",
    "O   |",
    "    |",
    "    |",
    "    |",
    "=========",
  ],
  [
    "+---+",
    "|   |",
    "O   |",
    "|   |",
    "    |",
    "    |",
    "=========",
  ],
  [
    " +---+",
    " |   |",
    " O   |",
    "/|   |",
    "     |",
    "     |",
    "=========",
  ],
  [
    " +---+",
    " |   |",
    " O   |",
    "/|\\  |",
    "     |",
    "     |",
    "=========",
  ],
  [
    " +---+",
    " |   |",
    " O   |",
    "/|\\  |",
    "/    |",
    "     |",
    "=========",
  ],
  [
    " -----",
    " |   ||",
    " O   ||",
    "/|\\  ||",
    "/ \\  ||",
    "     ||",
    "=========",
  ],
];
*/

const HangmanFigureASCII = [
  `
    ▛▔▔▔▜
    ▏      ▐
            ▐
            ▐
            ▐
            ▐
    =========
  `,
  `
    +---+
    |   |
    O   |
        |
        |
        |
    =========
  `,
  `
    +---+
    |   |
    O   |
    |   |
        |
        |
    =========
  `,
  `
    +---+
    |   |
    O   |
   /|   |
        |
        |
    =========
  `,
  `
    +---+
    |   |
    O   |
   /|\\  |
        |
        |
    =========
  `,
  `
    +---+
    |   |
    O   |
   /|\\  |
   /    |
        |
    =========
  `,
  `
    -----
    |   ||
    O   ||
   /|\\  ||
   / \\  ||
        ||
    =========
  `,
];

const HangmanFigure = ({ errors }) => {
  const asciiArt = HangmanFigureASCII[0][errors];

  return (
    <View style={styles.container}>
          <Text style={styles.asciiText}>
            {HangmanFigureASCII[0]}
            {console.log(HangmanFigureASCII[errors])}
          </Text>
    </View>
  );
};

/*
key={errors}
            x="50%"
            y={20 + errors * 20}
            fontSize="20"
            fill="black"
            fontFamily="monospace"
*/

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "150",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    borderWidth: 1,
    borderRadius: 90
  },
  asciiText: {
    fontFamily: "monospace",
    fontSize: 14,
    color: "black",
    textAlign: "left",
    lineHeight: 18,
  }
});

export default HangmanFigure;

