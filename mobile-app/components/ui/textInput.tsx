import { StyledComponent } from "nativewind";
import React, { FC } from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputProps extends TextInputProps {
  className?: string;
  children?: React.ReactNode;
  label?: string;
}

const Input: FC<InputProps> = ({ className, label, ...props }: InputProps) => {
  return (
    <StyledComponent component={View} className="my-3">
      {label && <Text style={{ fontSize: 14 }}>{label}</Text>}
      <StyledComponent
        component={TextInput}
        className={`${className} mt-2 border border-gray-300  py-[12px] px-[16px] rounded-[10px]`}
        {...props}
      />
    </StyledComponent>
  );
};

export default Input;
