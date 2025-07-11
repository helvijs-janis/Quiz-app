/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
export default interface ButtonProps {
  value: string;
  onClick: Function;
  colorPalette: string;
  variant: "outline" | "solid" | "subtle" | "surface" | "ghost" | "plain";
  className?: string;
  disabled?: any;
  width?: string;
}
