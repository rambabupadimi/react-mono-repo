import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ResetPassword } from './reset-password';

const Story: ComponentMeta<typeof ResetPassword> = {
  component: ResetPassword,
  title: 'ResetPassword',
};
export default Story;

const Template: ComponentStory<typeof ResetPassword> = (args) => (
  <ResetPassword {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
