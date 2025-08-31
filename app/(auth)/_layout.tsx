import { images } from "@/constants";
import { Slot } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function _Layout() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
        <View
          className="w-full relative"
          style={{ height: Dimensions.get("screen").height / 2.25 }}
        >
          <ImageBackground
            source={images.loginGraphic}
            className="size-full rounded-b-xl"
            resizeMode="stretch"
          />
          <Image
            source={images.logo}
            className="self-center size-[30%] rounded-3xl shadow shadow-black absolute -bottom-10 z-10"
          />
        </View>
        <Slot />
      </ScrollView>
      <Text>Layout</Text>
    </KeyboardAvoidingView>
  );
}
