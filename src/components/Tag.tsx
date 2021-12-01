import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import Text from './Text';
import { EColors } from '../styles';

interface ITagProps {
  label?: string;
  color?: 'green' | 'red';
}

function getTagTextColor(color?: 'green' | 'red') {
  switch (color) {
    case 'green':
      return EColors.green_100;
    case 'red':
      return EColors.red_60;

    default:
      return EColors.green_100;
  }
}

const Tag: FunctionComponent<ITagProps> = (props) => {
  const { label, color } = props;

  return (
    <TagElement color={color}>
      <Text variant="body3" textColor={getTagTextColor(color)}>
        {label}
      </Text>
    </TagElement>
  );
};

const TagElement = styled.div<ITagProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px 2px;
  height: 20px;
  border-radius: 4px;
  cursor: default;

  ${(props) =>
    props.color === 'green' &&
    `
    background: ${EColors.green_20};
    `};

  ${(props) =>
    props.color === 'red' &&
    `
    background: ${EColors.pink_20};
    `};
`;

export default Tag;
