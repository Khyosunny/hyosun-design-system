import { HTMLAttributes, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { EColors, EFontSizes, EFontWeight } from '../styles';
import { TFontSize, TFontWeight } from '..';

export interface ITextProps
  extends HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  align?: 'start' | 'center' | 'end';
  textColor?: EColors;
  weight?: TFontWeight;
  variant?: TFontSize;
}

const Text: FunctionComponent<ITextProps> = (props) => {
  const {
    children,
    variant = 'body2',
    textColor = EColors.black_100,
    weight = 'regular',
    align = 'start',
    ...restProps
  } = props;
  switch (variant) {
    case 'h1':
      return (
        <H1 style={{ color: textColor }} align={align} {...restProps}>
          {children}
        </H1>
      );
    case 'h2':
      return (
        <H2 style={{ color: textColor }} align={align} {...restProps}>
          {children}
        </H2>
      );
    case 'h3':
      return (
        <H3 style={{ color: textColor }} align={align} {...restProps}>
          {children}
        </H3>
      );
    case 'h4':
      return (
        <H4 style={{ color: textColor }} align={align} {...restProps}>
          {children}
        </H4>
      );
    case 'h5':
      return (
        <H5 style={{ color: textColor }} align={align} {...restProps}>
          {children}
        </H5>
      );
    case 'body1':
      return (
        <Body1
          style={{ color: textColor }}
          weight={weight}
          align={align}
          {...restProps}
        >
          {children}
        </Body1>
      );
    case 'body2':
      return (
        <Body2
          style={{ color: textColor }}
          weight={weight}
          align={align}
          {...restProps}
        >
          {children}
        </Body2>
      );
    case 'body3':
      return (
        <Body3
          style={{ color: textColor }}
          weight={weight}
          align={align}
          {...restProps}
        >
          {children}
        </Body3>
      );
    case 'body4':
      return (
        <Body4
          style={{ color: textColor }}
          weight={weight}
          align={align}
          {...restProps}
        >
          {children}
        </Body4>
      );

    default:
      return <p></p>;
  }
};

const H1 = styled.h1<ITextProps>`
  font-size: ${EFontSizes.h1};
  font-weight: ${EFontWeight.medium};
  text-align: ${(props) => props.align && props.align};
`;

const H2 = styled.h2<ITextProps>`
  font-size: ${EFontSizes.h2};
  font-weight: ${EFontWeight.medium};
  text-align: ${(props) => props.align && props.align};
`;

const H3 = styled.h3<ITextProps>`
  font-size: ${EFontSizes.h3};
  font-weight: ${EFontWeight.medium};
  text-align: ${(props) => props.align && props.align};
`;

const H4 = styled.h4<ITextProps>`
  font-size: ${EFontSizes.h4};
  font-weight: ${EFontWeight.medium};
  text-align: ${(props) => props.align && props.align};
`;

const H5 = styled.h5<ITextProps>`
  font-size: ${EFontSizes.h5};
  font-weight: ${EFontWeight.medium};
  text-align: ${(props) => props.align && props.align};
`;

const Body1 = styled.p<ITextProps>`
  font-size: ${EFontSizes.body1};
  font-weight: ${(props) => props.weight && EFontWeight[props.weight]};
  text-align: ${(props) => props.align && props.align};
`;

const Body2 = styled.p<ITextProps>`
  font-size: ${EFontSizes.body2};
  font-weight: ${(props) => props.weight && EFontWeight[props.weight]};
  text-align: ${(props) => props.align && props.align};
`;

const Body3 = styled.p<ITextProps>`
  font-size: ${EFontSizes.body3};
  font-weight: ${(props) => props.weight && EFontWeight[props.weight]};
  text-align: ${(props) => props.align && props.align};
`;

const Body4 = styled.p<ITextProps>`
  font-size: ${EFontSizes.body4};
  font-weight: ${(props) => props.weight && EFontWeight[props.weight]};
  text-align: ${(props) => props.align && props.align};
`;

export default Text;
