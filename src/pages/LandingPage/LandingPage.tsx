import {
  PageWrapper,
  Body,
  FooterWrapper,
} from "./LandingPage.styles"

import Header from "../../widgets/Header/Header"
import Footer from "../../widgets/Footer/Footer"

export default function LandingPage() {
  return (
    <PageWrapper>
      <Body>
        <Header />
      </Body>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageWrapper>
  )
}