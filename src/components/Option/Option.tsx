import { Button, ButtonVariant } from "@mantine/core";
import type { ReactNode } from "react";
// import type {ButtonVariant} from

interface Props {
  children: ReactNode;
  variant: ButtonVariant;
  color?: string;
  handleClick: () => void;
}

const rootStyle = {
  margin: "5px 0px",
  width: "100%",
  maxWidth: "180px",
};

const Option: React.FC<Props> = ({ children, variant, color, handleClick }) => {
  return (
    <Button
      styles={{ root: rootStyle }}
      variant={variant}
      color={color}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default Option;
