import {useAuth} from "@/providers/AuthProvider";
import {Redirect, Stack} from "expo-router";
import React from "react";

export default function AuthStack() {
  const {session} = useAuth();
  if (session) return <Redirect href="/" />;
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
