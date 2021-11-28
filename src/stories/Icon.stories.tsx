import React from 'react';
import Icon from '../components/Icon/Icon';
import { EColors } from '../styles';

export default {
  title: 'Components/Icon',
  component: Icon,
};

export const Default = () => (
  <>
    <Icon icon="radio_unchecked" />
    <Icon icon="radio_checked" />
  </>
);
