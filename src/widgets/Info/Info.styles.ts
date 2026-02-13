import styled from "styled-components"

export const InfoGrid = styled.div`
  display: grid;
  gap: 14px 22px;
  align-items: center;

  grid-template-columns: auto 1fr;
  grid-template-areas:
    "i1 t1"
    "i2 t2";

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "i1 i2"
      "t1 t2";
    text-align: center;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "i1"
      "t1"
      "i2"
      "t2";
    text-align: center;
  }
`

export const IconCell = styled.div<{ area: string }>`
  grid-area: ${p => p.area};
  display: flex;
  justify-content: center;
`

export const TextCell = styled.div<{ area: string }>`
  font-family: "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0;
  color: #FBFBFBB2;
  grid-area: ${p => p.area};
`

export const Icon = styled.img`
  height: 58px;
`
