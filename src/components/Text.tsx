import React, { HTMLAttributes, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { EColors, EFontSizes, EFontWeight } from '../styles';

export interface ITextProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  align?: 'start' | 'center' | 'end';
  textColor?: EColors;
  weight?: EFontWeight;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body4';
}

const Text: FunctionComponent<ITextProps> = (props) => {
  const { children, variant, textColor } = props;
  switch (variant) {
    case 'h1':
      return <H1 style={{ color: textColor }}>{children}</H1>;
    case 'h2':
      return <H2 style={{ color: textColor }}>{children}</H2>;

    default:
      return <p></p>;
  }
};

const H1 = styled.h1<ITextProps>`
  font-size: ${EFontSizes.h1};
  font-weight: ${EFontWeight.medium};
`;

const H2 = styled.h1<ITextProps>`
  font-size: ${EFontSizes.h2};
  font-weight: ${EFontWeight.medium};
`;

export default Text;
