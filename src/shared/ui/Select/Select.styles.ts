import styled from "styled-components";

export const SelectBox = styled.div`
  position: relative;
  width: 289px;
`;

export const SelectValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  font-family: "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #bababa;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Arrow = styled.span<{ open: boolean }>`
  display: inline-block;
  width: 9px;
  height: 9px;
  border-bottom: 1px solid #BABABA;
  border-right: 1px solid #BABABA;
  transform: rotate(${props => (props.open ? "225deg" : "45deg")});
  transition: transform 0.2s ease;
  margin-left: auto;
`;

export const SelectMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 8px;
  background: rgba(10, 12, 30, 0.9);
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

export const SelectOption = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  cursor: pointer;
  font-family: "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #bababa;

  img {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;