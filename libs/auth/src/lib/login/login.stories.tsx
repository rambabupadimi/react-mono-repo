import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Login } from './login';

const Story: ComponentMeta<typeof Login> = {
  component: Login,
  title: 'Login',
};
export default Story;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
