import {
  useImperativeHandle,
  useRef,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { TFontSize, TInputSize } from '..';
import { EColors } from '../styles';
import Text from './Text';
import Icon from './Icon/Icon';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: TInputSize;
  password?: boolean;
  error?: boolean;
  errorMessage?: string;
  icon?: {
    left?: React.ReactElement;
    right?: React.ReactElement;
  };
}

export interface IInputRef {
  focus: () => void;
  getValue: () => string;
  reset: () => void;
  rawRef: () => React.RefObject<HTMLInputElement>;
}

const Input = forwardRef<IInputRef, IInputProps>((props, ref) => {
  const {
    inputSize = 'lg',
    error,
    errorMessage,
    disabled,
    autoComplete = 'off',
    password,
    ...restProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [visiblePw, setVisiblePw] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        if (inputRef.current) inputRef.current.focus();
      },
      getValue: () => {
        return inputRef.current?.value || '';
      },
      reset: () => {
        if (inputRef.current) inputRef.current.value = '';
      },
      rawRef: () => {
        return inputRef;
      },
    };
  });

  return (
    <Container>
      <Inner
        inputSize={inputSize}
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        <InputElement
          ref={inputRef}
          type={password ? (visiblePw ? props.type : 'password') : props.type}
          autoComplete={autoComplete}
          {...restProps}
        />
        {password && (
          <button onClick={() => setVisiblePw(!visiblePw)}>
            <Icon
              icon={visiblePw ? 'visibility' : 'visibilityOff'}
              color={EColors.black_80}
            />
          </button>
        )}
      </Inner>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  width: 100%;
`;
const Inner = styled.div<IInputProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${EColors.black_60};

  ${(props) =>
    props.inputSize === 'xl' &&
    `
      border-radius: 8px;
      height: 48px;
      padding: 0 15px;
    `};

  ${(props) =>
    props.inputSize === 'lg' &&
    `
      border-radius: 8px;
      height: 40px;
      padding: 0 12px;
    `};

  ${(props) =>
    props.inputSize === 'md' &&
    `
      border-radius: 8px;
      height: 36px;
      padding: 0 10px;
    `};

  ${(props) =>
    props.inputSize === 'sm' &&
    `
      border-radius: 6px;
      height: 28px;
      padding: 0 8px;
    `};

  :focus-within {
    border: 1px solid ${EColors.blue_80};
  }
`;

const InputElement = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${EColors.black_100};
`;

export default Input;
