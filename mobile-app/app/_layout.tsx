import SafeAreaWrapper from "@/components/layout/safeAreaWrapper";
import { Stack } from "expo-router";
const stacksRoute = [
  {
    name: "index",
  },
  {
    name: "auth",
  },
  {
    name: "_app",
  },
];
export default function RootLayout() {
  return (
    <SafeAreaWrapper>
      <Stack>
        {stacksRoute.map((route, index: number) => {
          return (
            <Stack.Screen
              name={route.name}
              options={{
                headerShown: false,
                headerTintColor: "#fff",
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
              key={index}
            />
          );
        })}
      </Stack>
    </SafeAreaWrapper>
  );
}
