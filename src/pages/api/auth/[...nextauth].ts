import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "8e8857554449401ec66f",
      clientSecret: "510e01001daf8140614b636797b5d3259b5ac1a5",
    }),
  ],
  secret: "qwer1234",
};
export default NextAuth(authOptions);
