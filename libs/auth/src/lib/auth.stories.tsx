import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Auth } from './auth';

const Story: ComponentMeta<typeof Auth> = {
  component: Auth,
  title: 'Auth',
};
export default Story;

const Template: ComponentStory<typeof Auth> = (args) => <Auth {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
