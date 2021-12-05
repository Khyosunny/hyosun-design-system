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

export const Size = () => (
  <div style={{ maxWidth: 300 }}>
    <Input placeholder="placeholder" inputSize="xl" />
    <Input placeholder="placeholder" inputSize="lg" />
    <Input placeholder="placeholder" inputSize="md" />
    <Input placeholder="placeholder" inputSize="sm" />
  </div>
);

export const Disabled = () => (
  <div style={{ maxWidth: 300 }}>
    <Input disabled placeholder="placeholder" />
  </div>
);

export const Error = () => (
  <div style={{ maxWidth: 300 }}>
    <Input
      error
      placeholder="placeholder"
      errorMessage="올바른 형식이 아닙니다."
      inputSize="xl"
    />
    <Input
      error
      placeholder="placeholder"
      errorMessage="올바른 형식이 아닙니다."
      inputSize="lg"
    />
    <Input
      error
      placeholder="placeholder"
      errorMessage="올바른 형식이 아닙니다."
      inputSize="md"
    />
    <Input
      error
      placeholder="placeholder"
      errorMessage="올바른 형식이 아닙니다."
      inputSize="sm"
    />
  </div>
);

export const PasswordInput = () => (
  <div style={{ maxWidth: 300 }}>
    <Input password placeholder="password" />
  </div>
);
