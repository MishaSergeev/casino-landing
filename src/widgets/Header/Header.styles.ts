import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1920px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 110px;
  padding-bottom: 110px;

  @media (max-width: 1440px) {
    padding-top: 90px;
  }

  @media (max-width: 1200px) {
    padding-top: 70px;
  }

  @media (max-width: 768px) {
    padding-top: 56px;
  }

  @media (max-width: 480px) {
    padding-top: 44px;
  }

  @media (max-width: 375px) {
    padding-top: 36px;
  }
`

export const LogoTop = styled.img`
  width: 180px;
  margin-bottom: 18px;

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 130px;
  }
`

export const SlotLogo = styled.img`
  width: 260px;
  margin-bottom: 26px;

  @media (max-width: 768px) {
    width: 220px;
  }

  @media (max-width: 480px) {
    width: 190px;
  }

  @media (max-width: 375px) {
    width: 170px;
  }
`

export const CTA = styled.div``