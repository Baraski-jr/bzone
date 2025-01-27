"use client"

import { createClient, OAuthStrategy } from "@wix/sdk"
import Cookies from "js-cookie"
import { products, collections } from "@wix/stores"
import { createContext, ReactNode } from "react"

const refreshTokens = JSON.parse(Cookies.get("refreshToken") || "{}")

const WixClient = createClient({
  modules: {
    products,
    collections,
    // currentCart,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken: refreshTokens,
      accessToken: {
        value: "",
        expiresAt: 0,
      },
    },
  }),
})

export type WixClient = typeof WixClient

export const WixClientContext = createContext<WixClient>(WixClient)

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <WixClientContext.Provider value={WixClient}>
      {children}
    </WixClientContext.Provider>
  )
}
