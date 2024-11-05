import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GoogleProvider from 'next-auth/providers/google'

const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.AUTH_GOOGLE_ID ?? '',
            clientSecret: process.env.AUTH_GOOGLE_SECRET ?? ''
        })
    ]
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}