import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { getClient } from "../../../app/apollo/apollo-client";
import { gql } from "@apollo/client";

export const authOptions = {
  providers: [
    // GithubProvider({
    //   clientId: "8e8857554449401ec66f",
    //   clientSecret: "510e01001daf8140614b636797b5d3259b5ac1a5",
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("credentials", credentials);
        const query = gql`
        mutation {
          login(
            loginUserRequest: { email: "${credentials.email}", password: "${credentials.password}" }
          ) {
            userId
            jwtToken
          }
        }
        `;
        const client = getClient();
        const { data } = await client.mutate({ mutation: query });
        return data;
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, //1일
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = {};
        token.user.userId = user.login.userId;
        token.user.jwtToken = user.login.jwtToken;
      }
      return token;
    },

    session: async ({ session, token }) => {
      session.login = token.user;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return "/";
    },
  },
  secret: "oidfjrnkjsdfeoee213424!wsedfjw!34^&&smdnfuq!@#!@#98(*^&345",
};
export default NextAuth(authOptions);
