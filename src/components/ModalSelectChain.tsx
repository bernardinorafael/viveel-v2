import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from "@radix-ui/react-dialog"
import * as Icon from "phosphor-react"
import { useContext } from "react"
import { Controller, useForm } from "react-hook-form"
import { ThemeContext } from "styled-components"
import * as z from "zod"
import {
  ButtonModalChainContainer,
  ChainsTypeContainer,
  ChainTypeButton,
  CloseButton,
  DialogContent,
  DialogDescription,
  DialogOverlay,
} from "./styles"

import imageChain1 from "../assets/chains/chain1.svg"
import imageChain2 from "../assets/chains/chain2.svg"
import imageChain3 from "../assets/chains/chain3.svg"
import imageChain4 from "../assets/chains/chain4.svg"
import imageChain5 from "../assets/chains/chain5.svg"
import imageChain6 from "../assets/chains/chain6.svg"
import imageChain7 from "../assets/chains/chain7.svg"
import imageChain8 from "../assets/chains/chain8.svg"
import imageChain9 from "../assets/chains/chain9.svg"

const chainValidationSchema = z.object({
  chain: z.string(),
})

type NewFormInputChains = z.infer<typeof chainValidationSchema>

function ModalSelectChain() {
  const { color } = useContext(ThemeContext)
  const { control } = useForm<NewFormInputChains>({
    resolver: zodResolver(chainValidationSchema),
    defaultValues: {
      chain: "",
    },
  })

  return (
    <Dialog.Portal>
      <DialogOverlay />

      <DialogContent>
        <CloseButton>
          <Icon.X color={color.gray[100]} weight="bold" size={20} />
        </CloseButton>

        <Dialog.Title>Select a chain to continue</Dialog.Title>
        <DialogDescription>
          You can select which Blockchain you want to use. Select as many as you want.
        </DialogDescription>

        <form id="form-chains">
          <Controller
            control={control}
            name="chain"
            render={({ field }) => {
              return (
                <>
                  <ChainsTypeContainer onValueChange={field.onChange}>
                    <ChainTypeButton value="ethereum">
                      <div>
                        <img src={imageChain1} alt="" />
                      </div>

                      <strong>Ethereum</strong>

                      <Icon.CheckCircle size={28} weight="duotone" />
                    </ChainTypeButton>
                  </ChainsTypeContainer>

                  <ChainsTypeContainer onValueChange={field.onChange}>
                    <ChainTypeButton value="binance">
                      <div>
                        <img src={imageChain2} alt="" />
                      </div>

                      <strong>Binance</strong>

                      <Icon.CheckCircle size={28} weight="duotone" />
                    </ChainTypeButton>
                  </ChainsTypeContainer>

                  <ChainsTypeContainer onValueChange={field.onChange}>
                    <ChainTypeButton value="fantom">
                      <div>
                        <img src={imageChain3} alt="" />
                      </div>

                      <strong>Fantom</strong>

                      <Icon.CheckCircle size={28} weight="duotone" />
                    </ChainTypeButton>
                  </ChainsTypeContainer>

                  <ChainsTypeContainer onValueChange={field.onChange}>
                    <ChainTypeButton value="polygon">
                      <div>
                        <img src={imageChain4} alt="" />
                      </div>

                      <strong>Polygon</strong>

                      <Icon.CheckCircle size={28} weight="duotone" />
                    </ChainTypeButton>
                  </ChainsTypeContainer>

                  <ChainsTypeContainer onValueChange={field.onChange}>
                    <ChainTypeButton value="avalanche">
                      <div>
                        <img src={imageChain5} alt="" />
                      </div>

                      <strong>Avalanche</strong>

                      <Icon.CheckCircle size={28} weight="duotone" />
                    </ChainTypeButton>
                  </ChainsTypeContainer>

                  <ChainsTypeContainer onValueChange={field.onChange}>
                    <ChainTypeButton value="cardano">
                      <div>
                        <img src={imageChain6} alt="" />
                      </div>

                      <strong>Cardano</strong>

                      <Icon.CheckCircle size={28} weight="duotone" />
                    </ChainTypeButton>
                  </ChainsTypeContainer>

                  <ChainsTypeContainer onValueChange={field.onChange}>
                    <ChainTypeButton value="tron">
                      <div>
                        <img src={imageChain7} alt="" />
                      </div>

                      <strong>Tron</strong>

                      <Icon.CheckCircle size={28} weight="duotone" />
                    </ChainTypeButton>
                  </ChainsTypeContainer>

                  <ChainsTypeContainer onValueChange={field.onChange}>
                    <ChainTypeButton value="hyperledger">
                      <div>
                        <img src={imageChain8} alt="" />
                      </div>

                      <strong>Hyperledger</strong>

                      <Icon.CheckCircle size={28} weight="duotone" />
                    </ChainTypeButton>
                  </ChainsTypeContainer>

                  <ChainsTypeContainer onValueChange={field.onChange}>
                    <ChainTypeButton value="corda">
                      <div>
                        <img src={imageChain9} alt="" />
                      </div>

                      <strong>Corda</strong>

                      <Icon.CheckCircle size={28} weight="duotone" />
                    </ChainTypeButton>
                  </ChainsTypeContainer>
                </>
              )
            }}
          />
        </form>
        <ButtonModalChainContainer>
          <button form="form-chains" type="button">
            Confirm
          </button>
        </ButtonModalChainContainer>
      </DialogContent>
    </Dialog.Portal>
  )
}

export default ModalSelectChain
