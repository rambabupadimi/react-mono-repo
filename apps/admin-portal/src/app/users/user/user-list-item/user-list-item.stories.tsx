import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserListItem } from './user-list-item';

const Story: ComponentMeta<typeof UserListItem> = {
  component: UserListItem,
  title: 'UserListItem',
};
export default Story;

const Template: ComponentStory<typeof UserListItem> = (args) => (
  <UserListItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
