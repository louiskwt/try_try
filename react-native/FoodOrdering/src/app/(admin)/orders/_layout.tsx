import {Stack} from "expo-router";

export default function OrderStack() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="list" options={{headerShown: false, title: "Orders"}} />
    </Stack>
  );
}
