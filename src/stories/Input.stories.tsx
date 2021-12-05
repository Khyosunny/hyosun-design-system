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
    <Input disabled placeholder="비활성화" inputSize="xl" />
    <Input disabled placeholder="비활성화" inputSize="lg" />
    <Input disabled placeholder="비활성화" inputSize="md" />
    <Input disabled placeholder="비활성화" inputSize="sm" />
  </div>
);

export const Error = () => (
  <div style={{ maxWidth: 300 }}>
    <Input error errorMessage="올바른 형식이 아닙니다." inputSize="xl" />
    <Input error errorMessage="올바른 형식이 아닙니다." inputSize="lg" />
    <Input error errorMessage="올바른 형식이 아닙니다." inputSize="md" />
    <Input error errorMessage="올바른 형식이 아닙니다." inputSize="sm" />
  </div>
);

export const PasswordInput = () => (
  <div style={{ maxWidth: 300 }}>
    <Input password placeholder="password" inputSize="xl" />
    <Input password placeholder="password" inputSize="lg" />
    <Input password placeholder="password" inputSize="md" />
    <Input password placeholder="password" inputSize="sm" />
  </div>
);
