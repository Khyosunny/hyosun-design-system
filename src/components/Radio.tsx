import { FunctionComponent, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { TFontSize } from '..';
import { EColors } from '../styles';
import Text from './Text';

export interface IRadioProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  disabled?: boolean;
  label?: string;
  labelSize?: TFontSize;
}

const Radio: FunctionComponent<IRadioProps> = (props) => {
  const { label, labelSize, selected, disabled, ...restProps } = props;

  return (
    <RadioElement selected={selected} disabled={disabled} {...restProps}>
      <Button selected={selected} disabled={disabled} />
      {label && (
        <Text variant="body3" className="label">
          {label}
        </Text>
      )}
    </RadioElement>
  );
};

const Button = styled.button<IRadioProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 0 1.5px inset ${EColors.black_60};
  transition: 100ms ease-out;
  cursor: ${(props) => (props.disabled ? `not-allowed` : `pointer`)};

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${EColors.blue_80};
    opacity: 0;
  }

  ${(props) =>
    props.selected &&
    `
      box-shadow: 0 0 0 1px inset ${EColors.blue_80}!important;
      ::after {
        width: 12px;
        height: 12px;
        opacity: 1;
      }
    `};

  ${(props) =>
    props.disabled &&
    `
      box-shadow: 0 0 0 1.5px inset ${EColors.gray_80}!important;
      background: ${EColors.gray_60};
    `};
`;

const RadioElement = styled.div<IRadioProps>`
  display: inline-flex;
  align-items: center;
  column-gap: 6px;
  cursor: ${(props) => (props.disabled ? `not-allowed` : `pointer`)};

  :hover {
    ${Button} {
      box-shadow: 0 0 0 1.5px inset ${EColors.black_80};
    }
  }

  .label {
    user-select: none;

    ${(props) =>
      props.disabled &&
      `
        color: ${EColors.gray_100}!important;
        cursor: not-allowed;
      `};
  }
`;
export default Radio;
