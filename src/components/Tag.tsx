import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { EColors } from '../styles';

interface ITagProps {
  label?: string;
  color?: 'green' | 'red';
}

const Tag: FunctionComponent<ITagProps> = (props) => {
  const { label, color } = props;

  return <TagElement color={color}>{label}</TagElement>;
};

const TagElement = styled.div<ITagProps>`
  padding: 0 8px;
  height: 20px;

  ${(props) =>
    props.color === 'green' &&
    `
    background: ${EColors.green_20}
    color: ${EColors.green_100}
    `};
`;

export default Tag;
