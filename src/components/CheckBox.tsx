import { FunctionComponent, HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { TFontSize } from '..';
import { EColors } from '../styles';
import Icon from './Icon/Icon';
import Text from './Text';

interface ICheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  disabled?: boolean;
  label?: string;
  labelSize?: TFontSize;
}

const CheckBox: FunctionComponent<ICheckBoxProps> = (props) => {
  const { label, labelSize, selected, disabled, ...restProps } = props;

  return (
    <CheckBoxElement selected={selected} disabled={disabled} {...restProps}>
      <Button selected={selected} disabled={disabled}>
        <Icon
          size={20}
          icon="miniCheck"
          color={selected ? EColors.white : EColors.transparent}
        />
      </Button>
      {label && (
        <Text variant="body3" className="label">
          {label}
        </Text>
      )}
    </CheckBoxElement>
  );
};

const Button = styled.button<ICheckBoxProps>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  box-shadow: 0 0 0 1.5px inset ${EColors.black_60};
  transition: 100ms ease-out;
  cursor: ${(props) => (props.disabled ? `not-allowed` : `pointer`)};

  ${(props) =>
    props.selected &&
    `
      box-shadow: 0 0 0 1px inset ${EColors.blue_80}!important;
      background: ${EColors.blue_80};
    `};

  ${(props) =>
    props.disabled &&
    `
      box-shadow: 0 0 0 1.5px inset ${EColors.gray_80}!important;
      background: ${EColors.gray_60};
    `};
`;

const CheckBoxElement = styled.div<ICheckBoxProps>`
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

export default CheckBox;
