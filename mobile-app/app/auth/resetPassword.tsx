import { ViewContainer } from "@/components/createCustomElements";
import AuthLayoutWrapper from "@/components/layout/authLayoutWrapper";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/textInput";
import { Link } from "expo-router";
import React from "react";

const ResetPasswordScreen = () => {
  return (
    <AuthLayoutWrapper
      title="Reset Password"
      content="Reset your account password."
    >
      <ViewContainer>
        <Input
          keyboardType="email-address"
          placeholder="Email Address"
          label="Email"
        />
        <Button buttonClassName="my-4">
          <Link href={"/auth/verifyOtp"}>Get Reset Code</Link>
        </Button>
      </ViewContainer>
    </AuthLayoutWrapper>
  );
};

export default ResetPasswordScreen;
