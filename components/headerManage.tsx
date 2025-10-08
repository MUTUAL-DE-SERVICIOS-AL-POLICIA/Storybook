import { Divider } from "@heroui/divider";
import React from "react";

import { ButtonEdit, ButtonRegister } from "@/components";

interface Props {
  toRegister?: boolean;
  toEdit?: boolean;
  switchEdit: () => void;
  isEdit: boolean;
  onPressRegister?: () => void;
  componentRegister?: React.ReactNode;
}

export const HeaderManage = ({
  toRegister = false,
  toEdit = false,
  switchEdit,
  isEdit,
  onPressRegister = () => {},
  componentRegister = (
    <ButtonRegister
      isDisabled={isEdit}
      textTop="crear/actualizar"
      onPress={onPressRegister}
    />
  ),
}: Props) => {
  if (!(toRegister || toEdit)) return null;

  return (
    <>
      <div className="flex justify-end items-center gap-1">
        {toRegister && componentRegister}
        {toEdit && <ButtonEdit isEdit={isEdit} onPress={switchEdit} />}
      </div>
      <Divider className="bg-gray-400 mb-2 mt-2 w-full" />
    </>
  );
};
