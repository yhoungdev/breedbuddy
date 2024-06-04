import React, { FC, ReactNode } from "react";
import { View, ViewProps } from "react-native";
import { StyledComponent } from "nativewind";

interface IContainer extends ViewProps {
  children?: React.ReactNode;
  className?: string;
}
const Container: FC<IContainer> = ({
  children,
  className,
  ...props
}: IContainer) => {
  return (
    <StyledComponent
      component={View}
      className={`w-[90%] mx-auto ${className}`}
      {...props}
    >
      {children}
    </StyledComponent>
  );
};

export default Container;
