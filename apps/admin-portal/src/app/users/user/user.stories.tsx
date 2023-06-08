import { ComponentStory, ComponentMeta } from '@storybook/react';
import { User } from './user';

const Story: ComponentMeta<typeof User> = {
  component: User,
  title: 'User',
};
export default Story;

const Template: ComponentStory<typeof User> = (args) => <User {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
