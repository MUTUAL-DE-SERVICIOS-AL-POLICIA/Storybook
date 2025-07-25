import { Divider } from "@heroui/divider";
import { ButtonEdit, ButtonRegister } from "./";
import React from "react";

interface Props {
  toRegister?: boolean;
  toEdit?: boolean;
  switchEdit: () => void;
  isEdit: boolean;
  componentRegister?: React.ReactNode;
}

export const HeaderManage = ({
  toRegister=false,
  toEdit=false,
  switchEdit,
  isEdit,
  componentRegister=<ButtonRegister textTop="crear/actualizar" isDisabled={isEdit} />,
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
