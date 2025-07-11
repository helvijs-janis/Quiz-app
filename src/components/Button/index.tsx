import { Button } from "@chakra-ui/react";
import { type ButtonProps } from "../../interface/index";

const QuizButton: React.FC<ButtonProps> = ({
  value,
  onClick,
  colorPalette,
  variant,
  className,
  disabled,
  width,
}) => {
  return (
    <>
      <Button
        onClick={(event) => onClick(event)}
        colorPalette={colorPalette}
        variant={variant}
        className={className}
        disabled={disabled}
        w={width}
      >
        {value}
      </Button>
    </>
  );
};

export default QuizButton;
