import { useState } from "react"
import { useTranslation } from "react-i18next"

import Download from "../Download/Download"
import Info from "../Info/Info"
import Select from "../../shared/ui/Select/Select"

import { useThemeApp } from "../../app/ThemeContext"
import { ThemeName } from "../../app/theme"

import {
  Wrapper,
  GridWrap,
  HeroWrap,
  DownloadWrap,
  InfoWrap,
  SocialWrap,
  SelectBlock,
  BottomBlock,
  HeroImage,
  Icons,
  Icon,
  Text,
} from "./Footer.styles"

import hero from "../../shared/assets/hero.png"
import instagram from "../../shared/assets/icons/instagram.svg"
import telegram from "../../shared/assets/icons/telegram.svg"
import x from "../../shared/assets/icons/x.svg"
import email from "../../shared/assets/icons/email.svg"

import flagTr from "../../shared/assets/icons/t_flag.svg"
import flagUa from "../../shared/assets/icons/ua_flag.svg"

type OptionType = {
  label: string
  value: string
  icon?: string
}

export default function Footer() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useThemeApp()

  const langOptions: OptionType[] = [
    { label: "Turkish", value: "tr", icon: flagTr },
    { label: "Ukraine", value: "ua", icon: flagUa },
  ]

  const [lang, setLang] = useState<OptionType>(langOptions[0])

  const handleLangChange = (option: OptionType) => {
    setLang(option)
    i18n.changeLanguage(option.value)
  }

  const themeOptions: OptionType[] = [
    { label: "Orange", value: "orange" },
    { label: "Green", value: "green" },
  ]

  const selectedTheme =
    themeOptions.find(o => o.value === theme) ?? themeOptions[0]

  const handleThemeChange = (option: OptionType) => {
    setTheme(option.value as ThemeName)
  }

  return (
    <Wrapper>
      <GridWrap>
        <HeroWrap>
          <HeroImage src={hero} />
        </HeroWrap>

        <DownloadWrap>
          <Download />
        </DownloadWrap>

        <InfoWrap>
          <Info />
        </InfoWrap>

        <SocialWrap>
          <SelectBlock>
            <Select
              options={langOptions}
              value={lang}
              onChange={handleLangChange}
            />

            <Select
              options={themeOptions}
              value={selectedTheme}
              onChange={handleThemeChange}
            />
          </SelectBlock>

          <BottomBlock>
            <Text>{t("footer.social")}</Text>

            <Icons>
              <Icon src={instagram} />
              <Icon src={telegram} />
              <Icon src={x} />
              <Icon src={email} />
            </Icons>
          </BottomBlock>
        </SocialWrap>
      </GridWrap>
    </Wrapper>
  )
}