import styled from "styled-components"
import bg from "../../shared/assets/background-1.png"

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: Inter, sans-serif;
`

export const Body = styled.main`
  flex: 1;

  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
`

export const FooterWrapper = styled.footer`
  background: linear-gradient(180deg, #0b0f2a 0%, #0a0c1a 100%);
`