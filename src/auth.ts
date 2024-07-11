import NextAuth from "next-auth";
import twitter from "next-auth/providers/twitter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [twitter],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (profile) {
        token.username = (profile.data as any).username;
      }

      return token;
    },
    async session({ session, token , user }) {
      if (session.user) {
        (session.user as any).username = token.username;
      }
      return session;
    },
  },
});
