import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => <Button label="BUTTON" />;

export const Size = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', columnGap: 10 }}>
    <Button size="xl" label="버튼" />
    <Button size="lg" label="버튼" />
    <Button size="md" label="버튼" />
    <Button size="sm" label="버튼" />
    <Button size="xs" label="버튼" />
  </div>
);

export const Disabled = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', columnGap: 10 }}>
    <Button size="xl" label="버튼" disabled />
    <Button size="lg" label="버튼" disabled />
    <Button size="md" label="버튼" disabled />
    <Button size="sm" label="버튼" disabled />
    <Button size="xs" label="버튼" disabled />
  </div>
);

export const FullWidth = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', columnGap: 10 }}>
    <Button label="버튼" fullWidth />
  </div>
);

// export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
