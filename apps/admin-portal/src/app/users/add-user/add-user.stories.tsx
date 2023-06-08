import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AddUser } from './add-user';

const Story: ComponentMeta<typeof AddUser> = {
  component: AddUser,
  title: 'AddUser',
};
export default Story;

const Template: ComponentStory<typeof AddUser> = (args) => (
  <AddUser {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: false,
  type: '',
};
