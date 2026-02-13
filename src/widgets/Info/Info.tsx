import { useTranslation } from "react-i18next"
import {
  InfoGrid,
  IconCell,
  TextCell,
  Icon,
} from "./Info.styles"

import age from "../../shared/assets/icons/18plus.svg"
import licenseLogo from "../../shared/assets/license-logo.png"

export default function Info() {
  const { t } = useTranslation()
  return (
    <InfoGrid>
      <IconCell area="i1">
        <Icon src={age} />
      </IconCell>

      <TextCell area="t1">
        {t("footer.age")}
      </TextCell>

      <IconCell area="i2">
        <Icon src={licenseLogo} />
      </IconCell>

      <TextCell area="t2">
        {t("footer.certificate")}
      </TextCell>
    </InfoGrid>
  )
}