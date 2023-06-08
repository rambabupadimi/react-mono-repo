import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Topics } from './topics';

const Story: ComponentMeta<typeof Topics> = {
  component: Topics,
  title: 'Topics',
};
export default Story;

const Template: ComponentStory<typeof Topics> = (args) => <Topics {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
