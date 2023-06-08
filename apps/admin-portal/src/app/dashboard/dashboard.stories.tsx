import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dashboard } from './dashboard';

const Story: ComponentMeta<typeof Dashboard> = {
  component: Dashboard,
  title: 'Dashboard',
};
export default Story;

const Template: ComponentStory<typeof Dashboard> = (args) => (
  <Dashboard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
