import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../context/ThemeContext";
import { WrapperProvider } from "@/context/Wrapper";

export default function RootLayout() {
return (
  <ThemeProvider>
    <WrapperProvider>
  <SafeAreaProvider>
   <Stack screenOptions={{headerShown:false}}> 
    <Stack.Screen name="index" />
    {/* <Stack.Screen name="todos/{id}" /> */}
    </Stack>;
  
  </SafeAreaProvider></WrapperProvider>
  </ThemeProvider>
)
}