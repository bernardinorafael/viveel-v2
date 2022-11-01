import styled, { keyframes } from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"
import * as Toggle from "@radix-ui/react-toggle"

const contentShow = keyframes`
	0% {
		opacity: 0;
		transform: translate(-50%, -50%) scale(0.5);
	}
	100% {
		opacity: 1;
		transform: translate(-50%, -50%) scale(1);
	}
`

const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border-radius: ${(props) => props.theme.radii.sm};
  border: none;
  line-height: 0;
  padding: ${(props) => props.theme.space[1]};
  position: absolute;
  right: 10px;
  top: 10px;

  &:hover {
    background: ${(props) => props.theme.color.viveel.violet700};
    transition: background-color 0.3s;
  }
`
export { CloseButton }

const DialogDescription = styled(Dialog.Description)`
  color: ${(props) => props.theme.color.gray[400]};
  font-size: ${(props) => props.theme.fontSize.sm};
`
export { DialogDescription }

const DialogContent = styled(Dialog.Content)`
  animation: 0.2s ${contentShow} ease-in-out;
  background: ${(props) => props.theme.color.gray[800]};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 1px solid ${(props) => props.theme.color.gray[700]};
  box-shadow: 10px 10px 36px -7px rgba(0, 0, 0, 0.5);
  left: 50%;
  padding: ${(props) => props.theme.space[8]};
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  width: 720px;

  form {
    margin-top: ${(props) => props.theme.space[12]};
    display: grid;
    gap: ${(props) => props.theme.space[4]};
    grid-template-columns: 1fr 1fr 1fr;
  }
`
export { DialogContent }

const DialogOverlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.3);
  inset: 0;
  position: fixed;
`
export { DialogOverlay }

const ChainsTypeContainer = styled.div`
  /* display: grid;
  gap: ${(props) => props.theme.space[4]};
  grid-template-columns: 1fr 1fr 1fr; */
  width: 100%;

  &:focus {
    box-shadow: none;
  }

  button[type="submit"] {
    background: ${(props) => props.theme.color.viveel.violet500};
    border-radius: ${(props) => props.theme.radii.sm};
    border: none;
    color: ${(props) => props.theme.color.gray[100]};
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    height: 48px;
    margin-top: ${(props) => props.theme.space[8]};
    outline: none;
    width: 100%;

    &:not(:disabled):hover {
      background: ${(props) => props.theme.color.gray[100]};
      color: ${(props) => props.theme.color.gray[900]};
      transition: background-color 0.3s, color 0.3s;
    }
  }
`
export { ChainsTypeContainer }

const ButtonModalChainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.space[6]};

  button {
    background: ${(props) => props.theme.color.viveel.violet500};
    border-radius: ${(props) => props.theme.radii.sm};
    border: none;
    color: ${(props) => props.theme.color.gray[100]};
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    height: 48px;
    margin-top: ${(props) => props.theme.space[8]};
    outline: none;
    width: 100%;

    &:not(:disabled):hover {
      background: ${(props) => props.theme.color.viveel.violet700};
      transition: background-color 0.2s;
    }
  }
`
export { ButtonModalChainContainer }

const ChainTypeButton = styled(Toggle.Root)`
  align-items: center;
  background: ${(props) => props.theme.color.gray[700]};
  border-radius: ${(props) => props.theme.radii.sm};
  border: 2px solid transparent;
  color: ${(props) => props.theme.color.gray[100]};
  display: flex;
  gap: ${(props) => props.theme.space[2]};
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[1]};
  width: 100%;

  &[data-state="on"] {
    background: ${(props) => props.theme.color.viveel.violet700};
    border-color: transparent !important;
  }

  &[data-state="off"] {
    svg {
      visibility: hidden;
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme.color.viveel.violet500};
    transition: border-color 0.3s;
  }

  > div {
    align-items: center;
    display: flex;
    height: 3rem;
    justify-content: center;
    padding: ${(props) => props.theme.space[2]};
    width: 3rem;

    img {
      height: 35px;
    }
  }

  strong {
    font-size: ${(props) => props.theme.fontSize.md};
  }

  svg {
    color: ${(props) => props.theme.color.viveel.offWhite};
    margin-left: auto;
  }
`
export { ChainTypeButton }
