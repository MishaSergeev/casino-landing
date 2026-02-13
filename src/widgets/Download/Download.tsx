import { useTranslation } from "react-i18next"
import Button from "../../shared/ui/Button/Button";
import {
  DowloadContainer,
  Title,
  Subtitle,
  CTA,
  Logo,
} from "./Download.styles";

import logo from "../../shared/assets/logo-casino.png";
import download from "../../shared/assets/icons/download.svg";

export default function Download() {
  const { t } = useTranslation()
  return (
    <DowloadContainer>
      <Logo src={logo} />
      <Title>{t("footer.dowloadTitle")}</Title>
      <Subtitle>{t("footer.dowloadSubtitle")}</Subtitle>
      <CTA>
        <Button img={download}>{t("footer.dowloadCta")}</Button>
      </CTA>
    </DowloadContainer>
  );
}
