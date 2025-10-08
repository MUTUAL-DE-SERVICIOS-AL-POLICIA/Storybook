import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tray } from "@/components";

const meta = {
  title: "Tray",
  component: Tray,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tray>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    tabs: [
      { name: "nameOne", count: 9 },
      { name: "nameTwo", count: 3 },
      { name: "nameThree", count: 6 },
    ],
  },
};
