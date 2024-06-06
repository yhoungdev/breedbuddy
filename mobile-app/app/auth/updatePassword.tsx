import { ViewContainer } from "@/components/createCustomElements";
import AuthLayoutWrapper from "@/components/layout/authLayoutWrapper";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/textInput";
import React from "react";

const updatePasswordScreen = () => {
  return (
    <AuthLayoutWrapper
      title="Update Password"
      content="Update your account password"
    >
      <ViewContainer>
        <Input
          keyboardType="visible-password"
          placeholder="password"
          label="Password"
        />

        <Input
          keyboardType="visible-password"
          placeholder="password"
          label="Confirm Password"
        />
        <Button buttonClassName="my-4">Update Password</Button>
      </ViewContainer>
    </AuthLayoutWrapper>
  );
};

export default updatePasswordScreen;
