import React from 'react';
import Text from '../components/Text';
import { EColors } from '../styles';

export default {
  title: 'Components/Text',
  component: Text,
};

export const Default = () => (
  <Text variant="h1" textColor={EColors.black_100}>
    h1 - 48px
  </Text>
);

export const Variant = () => (
  <>
    <Text variant="h1" textColor={EColors.black_100}>
      h1 - 48px
    </Text>
    <Text variant="h2" textColor={EColors.black_100}>
      h2 - 36px
    </Text>
  </>
);
