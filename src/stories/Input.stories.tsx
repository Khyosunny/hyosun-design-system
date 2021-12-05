import React from 'react';
import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = () => (
  <div style={{ maxWidth: 300 }}>
    <Input placeholder="placeholder" />
  </div>
);

export const PasswordInput = () => (
  <div style={{ maxWidth: 300 }}>
    <Input password placeholder="password" />
  </div>
);
