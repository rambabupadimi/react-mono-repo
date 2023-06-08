import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Forms } from './forms';

const Story: ComponentMeta<typeof Forms> = {
  component: Forms,
  title: 'Forms',
};
export default Story;

const Template: ComponentStory<typeof Forms> = (args) => <Forms {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
