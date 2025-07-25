import type { Meta, StoryObj } from "@storybook/react-vite";

import { SpinnerLoading } from "@/components";

const meta = {
  title: "SpinnerLoading",
  component: SpinnerLoading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SpinnerLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    isLoading: true,
    isTextTop: false,
    isTextSpinner: false,
    isTextBottom: false,
    labelTop: "Cargando ...",
    labelSpinner:
      "Coloque el/los dedos seleccionado(s) en el sensor biométrico",
    labelBottom: "Guardando ...",
  },
};
