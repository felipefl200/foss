import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: <any>process.env.GOOGLE_CLIENT_ID,
      clientSecret: <any>process.env.GOOGLE_CLIENT_SECRET
    }),
    GitHubProvider({
      clientId: <any>process.env.GITHUB_CLIENT_ID,
      clientSecret: <any>process.env.GITHUB_CLIENT_SECRET
    })
  ],
  debug: process.env.NODE_ENV === 'development',
}

export default NextAuth(authOptions)