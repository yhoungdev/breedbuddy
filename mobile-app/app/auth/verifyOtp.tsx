import { ViewContainer } from "@/components/createCustomElements";
import AuthLayoutWrapper from "@/components/layout/authLayoutWrapper";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/textInput";
import { Link } from "expo-router";

import React from "react";

const VerifyOtp = () => {
  return (
    <AuthLayoutWrapper
      title="Verfiction Code"
      content="Enter the 6 digit OTP code sent to you"
    >
      <ViewContainer>
        <Input
          keyboardType="number-pad"
          placeholder="Email Address"
          label="Email"
        />
        <Button buttonClassName="my-4">
          <Link href={"/auth/updatePassword"}>Confirm Code</Link>
        </Button>
      </ViewContainer>
    </AuthLayoutWrapper>
  );
};

export default VerifyOtp;
