import React from "react";
import { Stack } from "expo-router";

const stacksRoute = [
  {
    name: "index",
  },
  {
    name: "resetPassword",
  },
  {
    name: "verifyOtp",
  },
  {
    name: "updatePassword",
  },
];

const AuthLayout = () => {
  return (
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
  );
};

export default AuthLayout;
