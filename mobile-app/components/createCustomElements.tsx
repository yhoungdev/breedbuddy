import { StyledComponent, styled } from "nativewind";
import { FC } from "react";
import { Text, TextProps, View, ViewProps } from "react-native";

interface IText extends TextProps {
  children?: React.ReactNode;
  className?: string;
}

interface IViewContainer extends ViewProps {
  children?: React.ReactNode;
  className?: string;
}
const StyledText = styled(Text);

export const Typography: FC<IText> = ({
  className,
  children,
  ...props
}: IText) => {
  return (
    <StyledText className={className} {...props}>
      {children}
    </StyledText>
  );
};

export const ViewContainer: FC<IViewContainer> = ({
  children,
  className,
  ...props
}: IViewContainer) => {
  return (
    <StyledComponent className={className} component={View} {...props}>
      {children}
    </StyledComponent>
  );
};
