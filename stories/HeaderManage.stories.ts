import type { Meta, StoryObj } from "@storybook/react-vite";

import { HeaderManage } from "@/components";

const meta = {
  title: "HeaderManage",
  component: HeaderManage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderManage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    toRegister: true,
    toEdit: true,
    switchEdit: () => {},
    isEdit: false,
  },
};
