import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardActions } from "@/components";

const meta = {
  title: "CardActions",
  component: CardActions,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    textHeader: "Top Arriba",
    textBody: "Texto del cuerpo tamaño dinámico de ancho",
    textActive: "VISUALIZANDO",
    textLoading: "CARGANDO...",
    textHover: "VISUALIZAR",
    isEdit: false,
    activeId: "0",
    dataId: "1",
    isLoading: false,
    onPress: () => {},
    onDelete: true,
    removeData: () => {},
    height: "min-h-[120px]",
    sizeTextBody: "text-sm",
  },
};

export const Simple: Story = {
  args: {
    textHeader: "Top Arriba",
  },
};
