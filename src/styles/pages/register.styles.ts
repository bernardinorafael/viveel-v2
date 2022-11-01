import styled, { css } from "styled-components"

const MainContainer = styled.main`
  background-image: url("/src/assets/asset 25.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain;
  background-position-y: 200px;
  background-position-x: -70px;
  display: grid;
  grid-template-columns: 3fr 5fr;

  @media (max-width: 940px) {
    align-content: center;
    background-image: url("/src/assets/asset 25-edited.png");
    background-position: left;
    display: grid;
    grid-template-columns: 1fr;
    height: 100vh;
  }

  @media (max-width: 790px) {
    background-image: none;
  }
`
export { MainContainer }

const BannerContainer = styled.div`
  background: ${(props) => props.theme.color.viveel.violet100};
  height: 100vh;
  padding: ${(props) => props.theme.space[8]};

  @media (max-width: 940px) {
    display: none;
  }
`
export { BannerContainer }

const RegisterContainer = styled.div`
  background: ${(props) => props.theme.color.gray[800]};
  border-radius: ${(props) => props.theme.radii.sm};
  margin: auto;
  padding: ${(props) => props.theme.space[6]} ${(props) => props.theme.space[10]};
  width: 720px;

  @media (max-width: 1366px) {
    max-width: 580px;
  }

  @media (max-width: 1120px) {
    max-width: 480px;
  }

  @media (max-width: 520px) {
    max-width: 390px;
  }

  h1 {
    margin-bottom: ${(props) => props.theme.space[10]};
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.space[6]};
    position: relative;

    input {
      background: ${(props) => props.theme.color.gray[700]};
      background: transp;
      border-radius: ${(props) => props.theme.radii.sm};
      border: none;
      color: ${(props) => props.theme.color.gray[100]};
      font-size: ${(props) => props.theme.fontSize.lg};
      height: 3rem;
      outline: none;
      padding: ${(props) => props.theme.space[4]};
      width: 100%;

      &[type="number"] {
        ::-webkit-inner-spin-button {
          appearance: none;
        }
      }

      &::placeholder {
        color: ${(props) => props.theme.color.gray[500]};
      }
    }
  }
`
export { RegisterContainer }

interface InputContainerProps {
  error: boolean
}

const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[2]};
  width: 100%;

  span {
    color: ${(props) => props.theme.color.red[500]};
    font-size: ${(props) => props.theme.fontSize.xs};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  ${(props) =>
    props.error &&
    css`
      input {
        box-shadow: 0 0 0 3px ${(props) => props.theme.color.red[500]} !important;
      }
    `}
`
export { InputContainer }

const DistributionInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[2]};
  text-align: left;
  width: 100%;

  span {
    align-self: flex-start;
    display: block;
    user-select: none;
  }

  > div {
    display: flex;
    gap: ${(props) => props.theme.space[6]};
    width: 100%;

    @media (max-width: 1120px) {
      flex-direction: column;
    }
  }
`
export { DistributionInput }

const ButtonSelectChain = styled.button`
  align-items: center;
  align-self: flex-start;
  background: transparent;
  border-radius: ${(props) => props.theme.radii.sm};
  border: none;
  color: ${(props) => props.theme.color.viveel.violet500};
  display: flex;
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  gap: ${(props) => props.theme.space[2]};
  justify-content: center;
  outline: none;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};

  &:hover {
    background: ${(props) => props.theme.color.viveel.violet100};
    transition: background-color 0.3s;
  }
`
export { ButtonSelectChain }

const ButtonBuildToken = styled.button`
  background: ${(props) => props.theme.color.viveel.violet500};
  border-radius: ${(props) => props.theme.radii.sm};
  border: none;
  color: ${(props) => props.theme.color.gray[100]};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  height: 48px;
  outline: none;
  width: 100%;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.color.viveel.violet700};
    transition: background-color 0.2s;
  }
`
export { ButtonBuildToken }
