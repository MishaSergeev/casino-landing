import { Wrapper, Overlay, Frame, CloseBtn } from "./GameModal.styles"

type Props = {
  open: boolean
  onClose: () => void
  src: string
}

export default function GameModal({ open, onClose, src }: Props) {
  if (!open) return null

  return (
    <Wrapper>
      <Overlay onClick={onClose} />

      <Frame>
        <CloseBtn onClick={onClose}>✕</CloseBtn>

        <iframe
          src={src}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
          title="game"
        />
      </Frame>
    </Wrapper>
  )
}