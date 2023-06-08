import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tables } from './tables';

const Story: ComponentMeta<typeof Tables> = {
  component: Tables,
  title: 'Tables',
};
export default Story;

const Template: ComponentStory<typeof Tables> = (args) => <Tables {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
