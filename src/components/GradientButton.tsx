import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface IGradientButton {
  label: string;
  icon: IconType;
}

export const GradientButton = (props: IGradientButton) => {
  return (
    <Button
      bgGradient="linear(to-br, #5190ff,#47ccda)"
      height="10vw"
      width="25vw"
      color="white"
      leftIcon={<Icon as={props.icon} />}
      fontSize={22}
    >
      {props.label}
    </Button>
  );
};
