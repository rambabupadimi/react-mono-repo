import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavLayout } from './nav-layout';

const Story: ComponentMeta<typeof NavLayout> = {
  component: NavLayout,
  title: 'NavLayout',
};
export default Story;

const Template: ComponentStory<typeof NavLayout> = (args) => (
  <NavLayout {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
