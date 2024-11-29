import {Stack} from "expo-router";
import React from "react";

export default function AuthStack() {
  return (
    <Stack
      screenOptions={{
        title: "Sign in",
      }}>
      <Stack.Screen name="sign-up" options={{title: "Sign up"}} />
      <Stack.Screen name="sign-in" options={{title: "Sign in"}} />
    </Stack>
  );
}
