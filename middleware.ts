import { createClient, OAuthStrategy } from "@wix/sdk"
import { NextRequest, NextResponse } from "next/server"

// clerk start
import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}

// clerk end

const middleware = async (request: NextRequest) => {
  const cookies = request.cookies
  const response = NextResponse.next()

  if (cookies.get("refreshToken")) return response

  const wixClient = createClient({
    auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
  })

  const tokens = await wixClient.auth.generateVisitorTokens()
  response.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
    maxAge: 60 * 60 * 24 * 30,
  })

  return response
}

export { middleware }
