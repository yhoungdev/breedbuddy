import Container from "@/components/layout/container";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import React from "react";
import { View, Text } from "react-native";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <Container className="bg-red-300">
          <Text>lorem</Text>
          {children}
        </Container>
      </SafeAreaView>
    </>
  );
};

export default AuthLayout;
