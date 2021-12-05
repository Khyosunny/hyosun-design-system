import {
  useImperativeHandle,
  useRef,
  forwardRef,
  InputHTMLAttributes,
  useState,
  useEffect,
} from 'react';
import styled from '@emotion/styled';
import { TFontSize, TInputSize } from '..';
import { EColors, EFontSizes } from '../styles';
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

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [visiblePw]);

  return (
    <Container inputSize={inputSize} error={error}>
      <Inner
        inputSize={inputSize}
        disabled={disabled}
        error={error}
        onClick={() => {
          if (inputRef.current) inputRef.current.focus();
        }}
      >
        <InputElement
          ref={inputRef}
          type={password ? (visiblePw ? props.type : 'password') : props.type}
          autoComplete={autoComplete}
          disabled={disabled}
          inputSize={inputSize}
          error={error}
          {...restProps}
        />
        {password && (
          <button
            onClick={() => setVisiblePw(!visiblePw)}
            className="password_button"
          >
            <Icon
              icon={visiblePw ? 'visibility' : 'visibilityOff'}
              color={EColors.black_80}
            />
          </button>
        )}
      </Inner>
      {errorMessage && (
        <Text
          textColor={EColors.red_60}
          className="error_message"
          variant="body4"
        >
          {errorMessage}
        </Text>
      )}
    </Container>
  );
});

const Container = styled.div<IInputProps>`
  position: relative;
  width: 100%;
  margin-bottom: ${(props) => (props.error ? '24px' : 0)};

  .error_message {
    position: absolute;
  }
`;
const Inner = styled.div<IInputProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${EColors.black_60};
  transition: all 200ms ease-out;

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

      .password_button {
        width: 22px;
        height: 22px;
        
        svg {
          width: 22px;
          height: 22px;
        }
      }
    `};

  ${(props) =>
    props.inputSize === 'md' &&
    `
      border-radius: 8px;
      height: 36px;
      padding: 0 10px;

      .password_button {
        width: 20px;
        height: 20px;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    `};

  ${(props) =>
    props.inputSize === 'sm' &&
    `
      border-radius: 6px;
      height: 28px;
      padding: 0 8px;

      .password_button {
        width: 16px;
        height: 16px;

        svg {
          width: 16px;
          height: 16px;
        }
      }
    `};

  :focus-within {
    border: 1px solid ${EColors.blue_80};
  }

  :hover {
    border: 1px solid ${EColors.blue_80};
  }

  ${(props) =>
    props.disabled &&
    `
      border: 1px solid ${EColors.black_40}!important;
      background: ${EColors.gray_60};
      cursor: not-allowed;
    `};

  ${(props) =>
    props.error &&
    `
      border: 1px solid ${EColors.red_60}!important;
    `};
`;

const InputElement = styled.input<IInputProps>`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${EColors.black_100};
  cursor: text;

  ${(props) =>
    props.inputSize === 'xl' &&
    `
      font-size: ${EFontSizes.body2};
    `};

  ${(props) =>
    props.inputSize === 'lg' &&
    `
      font-size: ${EFontSizes.body2};
    `};

  ${(props) =>
    props.inputSize === 'md' &&
    `
      font-size: ${EFontSizes.body3};
    `};

  ${(props) =>
    props.inputSize === 'sm' &&
    `
      font-size: ${EFontSizes.body4};
    `};

  ::placeholder {
    color: ${EColors.black_60};
  }

  ${(props) =>
    props.disabled &&
    `
        cursor: not-allowed;

        ::placeholder {
          color: ${EColors.gray_100};
        }
    `};
`;

export default Input;
