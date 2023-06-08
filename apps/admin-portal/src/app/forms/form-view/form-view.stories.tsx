import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormView } from './form-view';

const Story: ComponentMeta<typeof FormView> = {
  component: FormView,
  title: 'FormView',
};
export default Story;

const Template: ComponentStory<typeof FormView> = (args) => (
  <FormView {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
