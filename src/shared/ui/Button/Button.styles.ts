import styled from "styled-components"
import { AppTheme } from "../../../app/theme"

export const StyledButton = styled.button<{ theme: AppTheme }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 250px;
  height: 56px;

  padding: 8px 24px;
  border-radius: 12px;
  border: none;

  background: ${({ theme }) => theme.buttonGradient};
  color: ${({ theme }) => theme.buttonText};

  cursor: pointer;

  font-family: "SF Pro", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  transition: transform 0.15s ease, filter 0.15s ease;

  &:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    filter: brightness(0.98);
  }

  img {
    width: 24px;
    height: 24px;
  }
`
