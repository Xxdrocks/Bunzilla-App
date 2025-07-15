import { Slot } from "expo-router";
import React from "react";
import { KeyboardAvoidingView, Text } from "react-native";

export default function _Layout() {
  return (
    <KeyboardAvoidingView>
      <Text>Layout</Text>
      <Slot />
    </KeyboardAvoidingView>
  );
}
