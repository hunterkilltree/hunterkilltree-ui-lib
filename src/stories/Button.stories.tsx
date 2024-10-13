import type { Meta, StoryFn } from "@storybook/react";
import { theme } from "../lib/theme";
import type { ButtonProps } from "../lib/components/Button/Button";
import { Button } from "../lib/components/Button/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      options: Object.keys(theme.button.color),
      control: { type: "inline-radio" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" },
    },
    pill: {
      control: { type: "boolean" },
    },
    outline: {
      control: { type: "boolean" },
    },
    gradientDuoTone: {
      options: Object.keys(theme.button.gradientDuoTone),
      control: { type: "inline-radio" },
    },
    // gradientMonochrome: {
    //   options: Object.keys(theme.button.gradientMonochrome),
    //   control: { type: "inline-radio" },
    // },
  },
  args: {
    disabled: false,
    isProcessing: false,
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.storyName = "Default";
DefaultButton.args = {
  children: "Button",
};
