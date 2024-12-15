import CustomColors from "@/styles/custom_colors";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{
    headerShown: true,
    headerTitle: "Ofenda com classe", 
    headerStyle: {
      backgroundColor: CustomColors.primary, 
    },
    headerTintColor: '#ffffff', 
  }}
  />;
}
