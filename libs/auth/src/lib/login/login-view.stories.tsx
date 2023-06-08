import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginView } from './login-view';

const Story: ComponentMeta<typeof LoginView> = {
  component: LoginView,
  title: 'LoginView',
  argTypes:{
    onLogin:{
      action: 'clicked'
    }
  }
};
export default Story;

const Template: ComponentStory<typeof LoginView> = (args) => (
  <LoginView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  loginLoadingStatus: 'loading',
  error:'No such user exist'
};
