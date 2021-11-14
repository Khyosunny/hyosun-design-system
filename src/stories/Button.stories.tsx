import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = () => <Button label="BUTTON" />;
export const Disabled = () => <Button label="BUTTON" disabled />;

// export const Default = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
