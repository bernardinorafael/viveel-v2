/* eslint-disable camelcase */
import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import ModalSelectChain from "../components/ModalSelectChain"
import { TokenContext } from "../context/TokenContext"
import {
  BannerContainer,
  ButtonBuildToken,
  ButtonSelectChain,
  DistributionInput,
  InputContainer,
  MainContainer,
  RegisterContainer,
} from "../styles/pages/register.styles"

import imageHeaderViveel from "../assets/asset 0.png"

const tokenFormValidation = z.object({
  token_name: z.string().min(1, "Required field"),
  symbol: z.string().min(1, "Required field"),
  name: z.string().min(1, "Required field"),
  amount: z.number().min(1, "Required field"),
})

type NewTokenFormType = z.infer<typeof tokenFormValidation>

function Register() {
  const { createNewToken } = useContext(TokenContext)

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewTokenFormType>({
    resolver: zodResolver(tokenFormValidation),
  })

  async function handleCreateNewToken(data: NewTokenFormType) {
    await createNewToken(data)
    reset()
  }

  return (
    <MainContainer>
      <BannerContainer>
        <header>
          <img src={imageHeaderViveel} alt="" />
        </header>
      </BannerContainer>

      <RegisterContainer>
        <h1>Build a token</h1>

        <form onSubmit={handleSubmit(handleCreateNewToken)}>
          <InputContainer error={!!errors.token_name?.message}>
            <input placeholder="Token name" type="text" {...register("token_name")} />
            {errors.token_name ? <span>{errors.token_name.message}</span> : null}
          </InputContainer>

          <InputContainer error={!!errors.symbol?.message}>
            <input placeholder="Token symbol" type="text" {...register("symbol")} />
            {errors.symbol ? <span>{errors.symbol.message}</span> : null}
          </InputContainer>

          <DistributionInput>
            <span>Symbol distribution</span>

            <div>
              <InputContainer error={!!errors.name?.message}>
                <input
                  placeholder="Name"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name ? <span>{errors.name.message}</span> : null}
              </InputContainer>

              <InputContainer error={!!errors.amount?.message}>
                <input min={0} placeholder="Amount" type="number" {...register("amount")} />
                {errors.amount ? <span>{errors.amount.message}</span> : null}
              </InputContainer>
            </div>
          </DistributionInput>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ButtonSelectChain type="button">
                <Icon.Coins weight="regular" size={24} />
                Select chain
              </ButtonSelectChain>
            </Dialog.Trigger>

            <ModalSelectChain />
          </Dialog.Root>

          <ButtonBuildToken type="submit">Build</ButtonBuildToken>
        </form>
      </RegisterContainer>
    </MainContainer>
  )
}

export default Register
