import { ButtonHTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';
import { EColors, EFontSizes, EFontWeight } from '../styles';
import { TButtonColor, TButtonSize, TButtonVariant } from '..';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  size?: TButtonSize;
  color?: TButtonColor;
  label?: string;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    variant = 'default',
    size = 'lg',
    color = 'blue',
    label,
    disabled,
    fullWidth,
    ...restProps
  } = props;
  return (
    <ButtonElement
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      ref={ref}
      {...restProps}
    >
      {label}
    </ButtonElement>
  );
});

const ButtonElement = styled.button<IButtonProps>`
  ${(props) =>
    props.size === 'xl' &&
    `
      height: 46px;
      padding: 0 24px;
      font-size: ${EFontSizes.body1};
      border-radius: 8px;
    `};

  ${(props) =>
    props.size === 'lg' &&
    `
      height: 40px;
      padding: 0 18px;
      font-size: ${EFontSizes.body2};
      border-radius: 6px;
    `};

  ${(props) =>
    props.size === 'md' &&
    `
      height: 36px;
      padding: 0 14px;
      font-size: ${EFontSizes.body3};
      border-radius: 6px;
    `};

  ${(props) =>
    props.size === 'sm' &&
    `
      height: 32px;
      padding: 0 10px;
      font-size: ${EFontSizes.body3};
      border-radius: 6px;
    `};

  ${(props) =>
    props.size === 'xs' &&
    `
      height: 28px;
      padding: 0 8px;
      font-size: ${EFontSizes.body4};
      border-radius: 4px;
    `};

  ${(props) =>
    props.variant === 'default' &&
    props.color === 'blue' &&
    !props.disabled &&
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

  ${(props) =>
    props.variant === 'default' &&
    props.color === 'black' &&
    !props.disabled &&
    `
      color: ${EColors.white};
      background: ${EColors.black_80};
      &:hover {
        background: ${EColors.black_90};
      }
      &:active {
        background: ${EColors.black_100};
      }
    `};

  ${(props) =>
    props.variant === 'default' &&
    props.disabled &&
    `
      color: ${EColors.black_40};
      background: ${EColors.gray_80};
    `};

  ${(props) => props.disabled && `cursor: not-allowed`};
  ${(props) => props.fullWidth && `width: 100%`};
  font-weight: ${EFontWeight.medium};
  transition: 100ms ease-out;
`;

export default Button;
