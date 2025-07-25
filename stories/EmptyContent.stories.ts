import type { Meta, StoryObj } from "@storybook/react-vite";

import { EmptyContent } from "@/components";

const meta = {
  title: "EmptyContent",
  component: EmptyContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    text: "NO EXISTE REGISTROS DE DOCUMENTOS",
  },
};
