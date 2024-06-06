import { ViewContainer } from "@/components/createCustomElements";
import AuthLayoutWrapper from "@/components/layout/authLayoutWrapper";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/textInput";
import { Link } from "expo-router";
import { StyledComponent } from "nativewind";
import React from "react";
import { View, Text } from "react-native";

const ResetPassword = () => {
  return (
    <Link href={"/auth/resetPassword"}>
      <StyledComponent
        component={View}
        className="bg-accent-pastel px-3 py-3 rounded-full"
      >
        <Text>Reset Password</Text>
      </StyledComponent>
    </Link>
  );
};

const LoginScreen = () => {
  return (
    <AuthLayoutWrapper
      title="Sign In"
      content="Sign in to continue your journey"
      withAction={<ResetPassword />}
    >
      <ViewContainer>
        <Input placeholder="Email Address" label="Email" />
        <Input placeholder="******" label="Password" />
        <Button buttonClassName="my-4">sign In</Button>
      </ViewContainer>
    </AuthLayoutWrapper>
  );
};

export default LoginScreen;
