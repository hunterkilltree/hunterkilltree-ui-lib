import type { Meta, StoryFn } from "@storybook/react";
import { ButtonGroup, Button } from "../lib/components/Button";
import type { ButtonGroupProps } from "../lib/components/Button";

export default {
  title: "Components/Button Group",
  component: ButtonGroup,
} as Meta;

const Template: StoryFn<ButtonGroupProps> = (args) => (
  <ButtonGroup {...args}>
    <Button color="gray">Profile</Button>
    <Button color="gray">Settings</Button>
    <Button color="gray">Messages</Button>
  </ButtonGroup>
);

export const DefaultAvatarGroup = Template.bind({});
DefaultAvatarGroup.storyName = "ButtonGroup";
DefaultAvatarGroup.args = {};
