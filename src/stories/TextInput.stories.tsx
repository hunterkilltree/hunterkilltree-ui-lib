import type { Meta, StoryFn } from "@storybook/react";
import { theme } from "../lib/theme";
import type { TextInputProps } from "../lib/components/TextInput";
import { TextInput } from "../lib/components/TextInput";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    color: {
      options: Object.keys(theme.button.color),
      control: { type: "inline-radio" },
    },
    sizing: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "inline-radio" },
    },
  },
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.storyName = "Text input";
Default.args = {};
