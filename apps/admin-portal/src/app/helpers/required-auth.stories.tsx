import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RequireAuth } from './required-auth';

const Story: ComponentMeta<typeof RequireAuth> = {
  component: RequireAuth,
  title: 'RequireAuth',
};
export default Story;

const Template: ComponentStory<typeof RequireAuth> = (args) => (
  <RequireAuth {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
