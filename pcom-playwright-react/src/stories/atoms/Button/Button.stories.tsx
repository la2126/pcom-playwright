import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Button  from './Button';


export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {  
  label:"Laura"
};

export const Mike = Template.bind({});
Mike.args = {  
  label:"Mike"
};
