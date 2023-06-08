import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DeleteUser } from './delete-user';

const Story: ComponentMeta<typeof DeleteUser> = {
  component: DeleteUser,
  title: 'DeleteUser',
};
export default Story;

const Template: ComponentStory<typeof DeleteUser> = (args) => (
  <DeleteUser {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isOpen: false,
};
