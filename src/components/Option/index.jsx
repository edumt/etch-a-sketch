import { Button } from "@mantine/core";

const style = {
  margin: "5px 0px",
  //padding: "5px 10px",
  width: "100%",
  maxWidth: "180px",
};

const Option = ({ children, variant, color, handleClick }) => {
  return (
    <Button style={style} variant={variant} color={color} onClick={handleClick}>
      {children}
    </Button>
  );
};

export default Option;
