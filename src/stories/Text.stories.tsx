import React from 'react';
import Text from '../components/Text';
import { EColors } from '../styles';

export default {
  title: 'Components/Text',
  component: Text,
};

export const Default = () => <Text>기본 폰트 16px regular</Text>;

export const Variant = () => (
  <>
    <p style={{ color: EColors.blue_80, fontSize: 24 }}>Title</p>
    <Text variant="h1" textColor={EColors.black_100}>
      h1 - 48px
    </Text>
    <Text variant="h2" textColor={EColors.black_100}>
      h2 - 36px
    </Text>
    <Text variant="h3" textColor={EColors.black_100}>
      h3 - 24px
    </Text>
    <Text variant="h4" textColor={EColors.black_100}>
      h4 - 22px
    </Text>
    <Text variant="h5" textColor={EColors.black_100}>
      h5 - 20px
    </Text>
    <br />
    <p style={{ color: EColors.blue_80, fontSize: 24 }}>Font Size</p>
    <Text variant="body1" textColor={EColors.black_100}>
      body1 - 18px
    </Text>
    <Text variant="body2" textColor={EColors.black_100}>
      body2 - 16px
    </Text>
    <Text variant="body3" textColor={EColors.black_100}>
      body3 - 14px
    </Text>
    <Text variant="body4" textColor={EColors.black_100}>
      body4 - 12px
    </Text>
    <br />
    <p style={{ color: EColors.blue_80, fontSize: 24 }}>Font Weight</p>
    <Text textColor={EColors.black_100} weight="light">
      light
    </Text>
    <Text textColor={EColors.black_100} weight="regular">
      regular
    </Text>
    <Text textColor={EColors.black_100} weight="medium">
      medium
    </Text>
    <Text textColor={EColors.black_100} weight="bold">
      bold
    </Text>
    <br />
    <p style={{ color: EColors.blue_80, fontSize: 24 }}>Text Align</p>
    <Text textColor={EColors.black_100} align="start">
      start
    </Text>
    <Text textColor={EColors.black_100} align="center">
      center
    </Text>
    <Text textColor={EColors.black_100} align="end">
      end
    </Text>
  </>
);
