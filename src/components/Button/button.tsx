import { Button as A_BUTTON, ButtonProps } from "antd";
export default function Button({ children, ...props }: ButtonProps) {
  return <A_BUTTON {...props}>{children}</A_BUTTON>;
}
