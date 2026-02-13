import { ReactNode } from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  children: ReactNode;
  img?: string;
  onClick?: () => void;
};

export default function Button({ children, img, onClick }: ButtonProps) {
  return (
    <StyledButton onClick={onClick}>
      {img && <img src={img} alt="" />}
      {children}
    </StyledButton>
  );
}
