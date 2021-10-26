import { Button } from "@mantine/core";

const SketchPadOption = ({ children, variant, handleClick }) => {
  return (
    <Button variant={variant} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default SketchPadOption;
