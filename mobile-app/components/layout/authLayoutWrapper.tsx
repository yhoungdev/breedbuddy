import React, { FC } from "react";
import { Typography, ViewContainer } from "../createCustomElements";
import { View } from "react-native";
import Container from "./container";
import { StyledComponent, styled } from "nativewind";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface IAuthProps {
  children: React.ReactNode;
  title?: string;
  content?: string;
  withAction?: React.ReactNode;
}

const StyledView = styled(View);

const AuthLayoutWrapper: FC<IAuthProps> = ({
  children,
  title,
  content,
  withAction,
}: IAuthProps) => {
  const route = useRouter();
  return (
    <Container className="py-5 flex  justify-center">
      <StyledView className="flex flex-row justify-between">
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          onPress={() => route.back()}
        />
        <View>{withAction}</View>
      </StyledView>
      <StyledComponent component={View} className="mt-[50px]">
        <ViewContainer className="flex gap-1">
          <Typography className="font-semibold  text-[16px]">
            {title}
          </Typography>
          <Typography className="text-gray-500">{content}</Typography>
        </ViewContainer>
        <ViewContainer className="mt-5">{children}</ViewContainer>
      </StyledComponent>
    </Container>
  );
};

export default AuthLayoutWrapper;
