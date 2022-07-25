import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'

export const authOptions: NextAuthOptions = {  
  providers: [
    GoogleProvider({
      clientId:<any> process.env.GOOGLE_CLIENT_ID,
      clientSecret:<any> process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId:<any> process.env.FACEBOOK_CLIENT_ID,
      clientSecret:<any> process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  debug: process.env.NODE_ENV === 'development',
}

export default NextAuth(authOptions)