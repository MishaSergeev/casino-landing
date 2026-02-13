import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 60px 32px;
  background: 
    linear-gradient(0deg, var(--White-White, #FFFFFF), var(--White-White, #FFFFFF)),
    linear-gradient(270deg, #06225D 0%, #02011F 37.03%);
  background-blend-mode: overlay;

  @media (max-width: 1200px) {
    padding: 48px 60px;
  }

  @media (max-width: 768px) {
    padding: 40px 28px;
  }

  @media (max-width: 480px) {
    padding: 36px 20px;
  }

  @media (max-width: 375px) {
    padding: 32px 16px;
  }
`;

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  grid-template-areas: "hero download info social";
  gap: 64px;
  align-items: start;

  @media (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "download"
      "social"
      "info";
    gap: 40px;
  }
  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: 
      "download"
      "social"
      "info";
    gap: 40px;
  }
`;

export const HeroWrap = styled.div`
  grid-area: hero;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DownloadWrap = styled.div`
  grid-area: download;
  display: flex;
  justify-content: center;
`;

export const InfoWrap = styled.div`
  grid-area: info;
  display: flex;
  justify-content: flex-start;
  align-self: center;

  @media (max-width: 1200px) {
    justify-content: center;
    width: 100%;
  }
`;

export const SocialWrap = styled.div`
  grid-area: social;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 100px;
  align-items: flex-end;

  @media (max-width: 1200px) {
    align-items: center;
    gap: 50px;
  }
`;

export const SelectBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-end;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: 1200px) {
    align-items: center;
  }
`;

export const HeroImage = styled.img`
  width: 288px;
  height: 288px;

  @media (max-width: 1440px) {
    width: 240px;
    height: 240px;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 4px;
`;

export const Icon = styled.img`
  width: 52px;
  cursor: pointer;
`;

export const Text = styled.div`
  font-family: "SF Pro", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  color: #bababa;
  align-self: flex-end; 
  text-align: right; 
  @media (max-width: 1200px) {
    text-align: center;
    align-self: anchor-center;
  }
`;
