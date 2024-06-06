import React from "react";
import { StatusBar, ViewProps } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView } from "react-native-safe-area-context";
interface SafeAreaWrapperProps extends ViewProps {
  children: React.ReactNode;
}

const StyledSafeAreaView = styled(SafeAreaView);

const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <StyledSafeAreaView className="flex-1" {...props}>
      <StatusBar barStyle="dark-content" />
      {children}
    </StyledSafeAreaView>
  );
};

export default SafeAreaWrapper;
