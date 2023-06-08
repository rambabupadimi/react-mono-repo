import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RequireDashboard } from './required-dashboard';

const Story: ComponentMeta<typeof RequireDashboard> = {
  component: RequireDashboard,
  title: 'RequireDashboard',
};
export default Story;

const Template: ComponentStory<typeof RequireDashboard> = (args) => (
  <RequireDashboard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
