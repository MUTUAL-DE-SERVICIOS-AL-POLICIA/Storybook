import type { Meta, StoryObj } from "@storybook/react-vite";

import { TableActions } from "@/components";

const meta = {
  title: "TableActions",
  component: TableActions,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TableActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    data: [
      {
        id: 1,
        name: "Tramite 1",
        role: "CEO",
        team: "Management",
        status: {
          name: "Activo",
          id: "1",
        },
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "tony.reichert@example.com",
      },
      {
        id: 2,
        name: "Tramite 2",
        role: "Tech Lead",
        team: "Development",
        status: {
          name: "Inactivo",
          id: "2",
        },
        age: "25",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        email: "zoey.lang@example.com",
      },
      {
        id: 3,
        name: "Tramite 3",
        role: "Sr. Dev",
        team: "Development",
        status: {
          name: "Inactivo",
          id: "2",
        },
        age: "22",
        avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        email: "jane.fisher@example.com",
      },
      {
        id: 4,
        name: "Tramite 4",
        role: "C.M.",
        team: "Marketing",
        status: {
          name: "Vacaciones",
          id: "3",
        },
        age: "28",
        avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        email: "william.howard@example.com",
      },
      {
        id: 5,
        name: "Tramite 5",
        role: "S. Manager",
        team: "Sales",
        status: {
          name: "Activo",
          id: "1",
        },
        age: "24",
        avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
        email: "kristen.cooper@example.com",
      },
      {
        id: 6,
        name: "Tramite 6",
        role: "P. Manager",
        team: "Management",
        age: "29",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        email: "brian.kim@example.com",
        status: { name: "Inactivo", id: "2" },
      },
      {
        id: 7,
        name: "Tramite 7",
        role: "Designer",
        team: "Design",
        status: {
          name: "Activo",
          id: "1",
        },
        age: "27",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
        email: "michael.hunt@example.com",
      },
      {
        id: 8,
        name: "Tramite 8",
        role: "HR Manager",
        team: "HR",
        status: {
          name: "Vacaciones",
          id: "3",
        },
        age: "31",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
        email: "samantha.brooks@example.com",
      },
      {
        id: 9,
        name: "Tramite 9",
        role: "F. Manager",
        team: "Finance",
        status: {
          name: "Activo",
          id: "1",
        },
        age: "33",
        avatar: "https://i.pravatar.cc/150?img=4",
        email: "frank.harrison@example.com",
      },
      {
        id: 10,
        name: "Tramite 10",
        role: "Ops Manager",
        team: "Operations",
        status: {
          name: "Inactivo",
          id: "2",
        },
        age: "35",
        avatar: "https://i.pravatar.cc/150?img=5",
        email: "emma.adams@example.com",
      }
    ],
    columns: [
      {name: "ID", uid: "id", sortable: true},
      {name: "NOMBRE", uid: "name", sortable: true},
      {name: "AÑOS", uid: "age", sortable: true},
      {name: "ROL", uid: "role", sortable: true},
      {name: "EQUIPO", uid: "team"},
      {name: "CORREO", uid: "email"},
      {name: "ESTADO", uid: "status", sortable: true},
      {name: "ACCIONES", uid: "actions"},
    ],
    initialVisibleColumns: ["name", "role", "status", "actions", "email", "team"],
    columnFilter: "status",
    optionsFilter: [
      {name: "Activo", id: "1" },
      {name: "Inactivo", id: "2" },
      {name: "Vacaciones", id: "3" },
    ],
  },
  
};
