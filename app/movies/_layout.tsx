import { Stack } from "expo-router";

export default function MovieDetailsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
