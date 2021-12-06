import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { icons } from './Icons';
import { EColors } from '../../styles';

export interface IIconProps {
  icon: keyof typeof icons;
  size?: number;
  color?: EColors;
}

const Icon: FunctionComponent<IIconProps> = (props) => {
  const { icon, size = 24, color = EColors.black_100 } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={icons[icon]} fill={color} />
    </Svg>
  );
};

const Svg = styled.svg`
  display: block;
  flex-shrink: 0;
`;

export default Icon;
