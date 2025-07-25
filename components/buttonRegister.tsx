import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { RegisterIcon } from "@/components";

export interface Props {
  onPress?: () => void;
  isLoading?: boolean;
  textTop: string;
  isDisabled?: boolean;
}

export const ButtonRegister = ({
  onPress = () => {},
  isLoading = false,
  textTop,
  isDisabled = false,
}: Props) => {

  return (
    <Tooltip content={textTop}>
      <Button endContent={<RegisterIcon />} isLoading={isLoading} onPress={onPress} isDisabled={isDisabled}>
        REGISTRAR
      </Button>
    </Tooltip>
  );
};
