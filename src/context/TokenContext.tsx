/* eslint-disable camelcase */
import { createContext, ReactNode, useState } from "react"
import { v4 as uuid } from "uuid"
import app from "../services/axios"

interface TokenProviderProps {
  children: ReactNode
}

interface Token {
  symbol: string
  token_name: string
  name: string
  amount: number
}

interface TokenContextType {
  tokens: Token[]
  createNewToken: (data: Token) => Promise<void>
}

export const TokenContext = createContext<TokenContextType>({} as TokenContextType)

function TokenProvider({ children }: TokenProviderProps) {
  const [tokens, setTokens] = useState<Token[]>([])

  async function createNewToken(data: Token) {
    const { symbol, token_name, amount, name } = data

    const response = await app.post("/tokens", {
      token_name,
      symbol,
      distribution: { name, amount },
      created_at: new Date(),
      id: uuid(),
    })

    setTokens((state) => [...state, response.data])
  }

  return (
    <TokenContext.Provider value={{ tokens, createNewToken }}>
      {children}
    </TokenContext.Provider>
  )
}

export default TokenProvider
