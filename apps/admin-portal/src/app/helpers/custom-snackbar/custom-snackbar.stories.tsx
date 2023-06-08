import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomSnackbar } from './custom-snackbar';

const Story: ComponentMeta<typeof CustomSnackbar> = {
  component: CustomSnackbar,
  title: 'CustomSnackbar',
};
export default Story;

const Template: ComponentStory<typeof CustomSnackbar> = (args) => (
  <CustomSnackbar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  open: false,
};
