import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from 'react';
import './button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, disabled, ...restProps } = props;
  return <button disabled={disabled}>{children}</button>;
};
