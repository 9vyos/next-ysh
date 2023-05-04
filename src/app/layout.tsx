import "./globals.css";
import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import Navbar from "./components/Navbar";
// import { getClient } from "./apollo/apollo-client";
import { ApolloClient, gql, HttpLink, InMemoryCache } from "@apollo/client";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // interface Proflie {
  //   user: {
  //     name: string | undefined;
  //     email: string | undefined;
  //     image: string | undefined;
  //   };
  // }

  const session: Session | null = await getServerSession(authOptions);

  // let token = session.login.jwtToken;
  let userData;
  if (session?.login.jwtToken) {
    const token = session?.login.jwtToken;

    const query = gql`
      query {
        getUser {
          id
          email
          name
          userType
        }
      }
    `;
    const client = new ApolloClient({
      link: new HttpLink({
        uri: "https://moonshot.hannah-log.site/graphql",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      cache: new InMemoryCache(),
    });
    const { data } = await client.query({ query });
    userData = data;
  } else {
    userData = {
      getUser: {
        __typename: undefined,
        id: undefined,
        email: undefined,
        name: undefined,
        userType: undefined,
      },
    };
  }

  return (
    <html lang="en">
      <body>
        <Navbar data={userData}></Navbar>
        <main className="lg:pl-72 py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </body>
    </html>
  );
}
