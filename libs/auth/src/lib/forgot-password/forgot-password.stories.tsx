import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ForgotPassword } from './forgot-password';

const Story: ComponentMeta<typeof ForgotPassword> = {
  component: ForgotPassword,
  title: 'ForgotPassword',
};
export default Story;

const Template: ComponentStory<typeof ForgotPassword> = (args) => (
  <ForgotPassword {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
