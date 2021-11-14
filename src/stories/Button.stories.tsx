import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => <Button label="BUTTON" />;
export const Size = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', columnGap: 10 }}>
    <Button size="xl" label="xl" />
    <Button size="lg" label="lg" />
    <Button size="md" label="md" />
    <Button size="sm" label="sm" />
    <Button size="xs" label="xs" />
  </div>
);
export const Disabled = () => <Button label="BUTTON" disabled />;

// export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
