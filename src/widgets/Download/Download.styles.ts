import styled from "styled-components"

export const DowloadContainer = styled.div`
  border: 1px dashed #FFBA47;
  border-radius: 18px;

  padding: 26px 30px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  backdrop-filter: blur(6px);
`

export const Logo = styled.img`
  width: 120px;
`

export const Title = styled.div`
  font-family: "SF Pro", sans-serif;
  font-weight: 800;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0;
  text-align: center;

  color: #ffffff;
  opacity: 1;
`;


export const Subtitle = styled.div`
  font-family: "SF Pro", sans-serif;
  font-weight: 600; 
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;

  color: #bababa;
  opacity: 1;
`;


export const CTA = styled.div`
  margin-top: 6px;
`