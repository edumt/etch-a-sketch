import { Button } from "@mantine/core";

const Option = ({ children, variant, handleClick }) => {
  return (
    <Button variant={variant} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default Option;
