import type { Meta, StoryFn } from "@storybook/react";
import { theme } from "../lib/theme";
import type { CheckboxProps } from "../lib/components/Checkbox";
import { Checkbox } from "../lib/components/Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      options: Object.keys(theme.button.color),
      control: { type: "inline-radio" },
    },
  },
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.storyName = "CheckBox";
DefaultCheckbox.args = {};
