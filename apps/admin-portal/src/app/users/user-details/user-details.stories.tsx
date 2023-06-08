import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserDetails } from './user-details';

const Story: ComponentMeta<typeof UserDetails> = {
  component: UserDetails,
  title: 'UserDetails',
};
export default Story;

const Template: ComponentStory<typeof UserDetails> = (args) => (
  <UserDetails {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
