import styled from "styled-components"

export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
`

export const Frame = styled.div`
  position: relative;
  width: 95%;
  height: 95%;
  margin: 2.5% auto;

  background: #000;
  border-radius: 16px;
  overflow: hidden;
`

export const CloseBtn = styled.button`
  position: absolute;
  top: 40px;
  right: 10px;

  width: 36px;
  height: 36px;

  border-radius: 50%;
  border: none;

  font-size: 18px;
  cursor: pointer;
  color: black;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
    top: 24px;
    right: 8px;
  }
`;