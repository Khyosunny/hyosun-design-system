import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import styled from '@emotion/styled';
import { EColors, EFontSizes, EFontWeight } from '../styles';
import { TButtonSizes } from '../..';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'outlined';
  size?: TButtonSizes;
  color?: 'blue';
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    children,
    variant = 'default',
    size = 'lg',
    color = 'blue',
    disabled,
    fullWidth,
    ...restProps
  } = props;
  return (
    <ButtonElement
      size={size}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      ref={ref}
      {...restProps}
    >
      {children}
    </ButtonElement>
  );
});

const ButtonElement = styled.button<IButtonProps>`
  ${(props) =>
    props.size === 'xl' &&
    `
      height: 48px;
      padding: 0 35px;
      font-size: ${EFontSizes.body_1};
      border-radius: 6px;
    `};

  ${(props) =>
    props.size === 'lg' &&
    `
      height: 40px;
      padding: 0 28px;
      font-size: ${EFontSizes.body_2};
      border-radius: 6px;
    `};

  ${(props) =>
    props.size === 'md' &&
    `
      height: 36px;
      padding: 0 20px;
      font-size: ${EFontSizes.body_2};
      border-radius: 6px;
    `};

  ${(props) =>
    props.size === 'sm' &&
    `
      height: 32px;
      padding: 0 18px;
      font-size: ${EFontSizes.body_2};
      border-radius: 6px;
    `};

  ${(props) =>
    props.size === 'xs' &&
    `
      height: 28px;
      padding: 0 12px;
      font-size: ${EFontSizes.body_4};
      border-radius: 4px;
    `};

  ${(props) =>
    props.color === 'blue' &&
    `
      color: ${EColors.white};
      background: ${EColors.blue_80};
      &:hover {
        background: ${EColors.blue_90};
      }
      &:active {
        background: ${EColors.blue_100};
      }
    `};

  ${(props) => props.disabled && `cursor: not-allowed`};
  ${(props) => props.fullWidth && `width: 100%`};
  font-weight: ${EFontWeight.medium};
  transition: 100ms ease-out;
`;

export default Button;
