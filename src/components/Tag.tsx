import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { EColors, EFontSizes } from '../styles';

interface ITagProps {
  label?: string;
  color?: 'green' | 'red';
}

const Tag: FunctionComponent<ITagProps> = (props) => {
  const { label, color } = props;

  return <TagElement color={color}>{label}</TagElement>;
};

const TagElement = styled.div<ITagProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px 2px;
  height: 20px;
  border-radius: 4px;
  font-size: ${EFontSizes.body3};

  ${(props) =>
    props.color === 'green' &&
    `
    background: ${EColors.green_20};
    color: ${EColors.green_100};
    `};

  ${(props) =>
    props.color === 'red' &&
    `
    background: ${EColors.pink_20};
    color: ${EColors.red_60};
    `};
`;

export default Tag;
