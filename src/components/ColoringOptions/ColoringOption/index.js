import { Button } from "@mantine/core";

const ColoringOption = ({ children, variant, handleClick }) => {
  return (
    <Button variant={variant} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default ColoringOption;
