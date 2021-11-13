import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import styled from '@emotion/styled';

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: Sizes;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, size = 'sm', disabled, fullWidth, ...restProps } = props;
  return (
    <ButtonElement
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      ref={ref}
      {...restProps}
    >
      {children}
    </ButtonElement>
  );
});

const ButtonElement = styled.button<ButtonProps>`
  ${(props) => sizeStyles[props.size as Sizes]}
  ${(props) => props.disabled && `cursor: not-allowed`}
  ${(props) => props.fullWidth && `width: 100%`}
`;

const sizeStyles = {
  xs: `
    height: 28px;
    padding: 0 12px;
  `,
  sm: `
    height: 32px;
    padding: 0 18px;
  `,
  md: `
    height: 36px;
    padding: 0 20px;
  `,
  lg: `
    height: 40px;
    padding: 0 28px;
  `,
  xl: `
    height: 48px;
    padding: 0 35px;
  `,
};

export default Button;
