import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { black,red } from "../utils/colors";

export default function TextButton({ children, style = {}, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  reset: {
    width:200,
    padding: 10,
    height: 50,
    borderRadius: 5,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
  }
});
