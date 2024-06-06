import React from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  View,
  StyleSheet,
} from "react-native";
import { styled } from "nativewind";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "@/constants/token";

interface IButton extends TouchableOpacityProps {
  className?: string;
  children?: React.ReactNode;
  textClassName?: string;
  buttonClassName?: string;
}

const StyledButton = styled(TouchableOpacity);
const StyledText = styled(Text);
const StyledView = styled(View);

export const Button = ({
  className,
  children,
  textClassName,
  buttonClassName,
  ...props
}: IButton) => {
  const defaultStyle = `py-[15px] flex items-center px-3 rounded-full w-[352px] mx-auto`;
  return (
    <StyledView className={`mx-auto w-[325px] rounded-full ${buttonClassName}`}>
      <LinearGradient
        colors={[COLORS.accent.primary, COLORS.accent.secondary, "#FF6036"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <StyledButton
          className={`${defaultStyle} ${className}`}
          {...props}
          style={styles.button}
        >
          <View>
            <StyledText className={`text-white ${textClassName}`}>
              {children}
            </StyledText>
          </View>
        </StyledButton>
      </LinearGradient>
    </StyledView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 100,
    width: "100%",
    paddingVertical: 1,
    paddingHorizontal: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1500,
  },
});
