import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { getClient } from "../../../app/apollo/apollo-client";
import { gql } from "@apollo/client";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "8e8857554449401ec66f",
      clientSecret: "510e01001daf8140614b636797b5d3259b5ac1a5",
    }),
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
        console.log("query", query);
        const client = getClient();
        console.log("client", client);
        const { data } = await client.mutate({ mutation: query });
        console.log("data", data);
        return data;
      },
    }),
  ],

  secret: "oidfjrnkjsdfeoee213424!wsedfjw!34^&&smdnfuq!@#!@#98(*^&345",
};
export default NextAuth(authOptions);
