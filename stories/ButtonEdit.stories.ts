import type { Meta, StoryObj } from "@storybook/react-vite";

import { ButtonEdit } from "@/components";

const meta = {
  title: "ButtonEdit",
  component: ButtonEdit,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    onPress: () => {},
    isEdit: false,
  },
};
