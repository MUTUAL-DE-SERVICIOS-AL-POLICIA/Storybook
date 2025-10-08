import { Tabs, Tab } from "@heroui/tabs";
import { Chip } from "@heroui/chip";
import { useState } from "react";

interface Props {
  tabs: { name: string; count: number }[];
}

export const Tray = ({ tabs }: Props) => {
  const [selected, setSelected] = useState<string>(tabs[0].name);

  return (
    <Tabs
      fullWidth
      aria-label="Tabs form"
      selectedKey={selected}
      size="md"
      onSelectionChange={(key) => setSelected(String(key))}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.name}
          title={
            <div className="flex items-center space-x-2">
              <span>{tab.name}</span>
              <Chip size="md" variant="faded">
                {tab.count}
              </Chip>
            </div>
          }
        />
      ))}
    </Tabs>
  );
};
