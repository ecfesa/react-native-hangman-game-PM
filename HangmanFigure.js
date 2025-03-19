import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Text } from "react-native-svg";

const HangmanFigureASCII = [
  [
    "+---+",
    "|   |",
    "    |",
    "    |",
    "    |",
    "    |",
    "=========",
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

const HangmanFigure = ({ errors }) => {
  const asciiArt = HangmanFigureASCII[errors];

  return (
    <View style={styles.container}>
      <Svg width="50%" height="100%">
        {asciiArt.map((line, index) => (
          <Text
            key={index}
            x="50%"
            y={20 + index * 20}
            fontSize="20"
            fill="black"
            fontFamily="monospace"
            textAnchor="middle"
          >
            {line}
          </Text>
        ))}
      </Svg>
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
    borderRadius: 90
  },
});

export default HangmanFigure;

