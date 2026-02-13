import { useState } from "react"
import { useTranslation } from "react-i18next"

import Button from "../../shared/ui/Button/Button"
import GameModal from "../../shared/ui/GameModal/GameModal"

import {
  Wrapper,
  LogoTop,
  SlotLogo,
  CTA,
} from "./Header.styles"

import logo from "../../shared/assets/logo-casino.png"
import logo777 from "../../shared/assets/logo-777.png"

const GAME_URL ="https://gateway.eva-digital-playground.com/v0/casino/games/launch?gameId=n2-novomatic-book-of-ra-deluxe&channel=desktop&partnerKey=0wl&lobbyUrl=https://chinchincasino.com&mode=demo&language=en"

export default function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const openGame = () => {
    window.open(
      GAME_URL,
      "_blank",
      "width=1024,height=768,resizable=yes,scrollbars=yes,status=yes"
    );
  };

  return (
    <>
      <Wrapper>
        <LogoTop src={logo} />
        <SlotLogo src={logo777} />

        <CTA>
          <Button onClick={/* openGame */() => setOpen(true)}>
            {t("header.cta")}
          </Button>
        </CTA>
      </Wrapper>

      <GameModal
        open={open}
        onClose={() => setOpen(false)}
        src={GAME_URL}
      />
    </>
  )
}