import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: true,
    headerTitle: "Ofenda com classe", 
    headerStyle: {
      backgroundColor: '#6200ee', 
    },
    headerTintColor: '#ffffff', 
  }}
  />;
}
