import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../lib/components/Button";
import { ButtonProps } from "../lib/components/Button/ButtonType";

export default {
  title: "Components/Button",
  component: Button, // Đây là component chính sẽ được dùng mặc định trong câu chuyện
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
  args: {
    title: "Click Me", // Giá trị mặc định cho Button
  },
};
