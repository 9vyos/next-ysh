import { getClient } from "./apollo-client";
import { gql } from "@apollo/client";

const query = gql`
  mutation {
    login(
      loginUserRequest: { email: "sunghe1016@naver.com", password: "1234" }
    ) {
      userId
      jwtToken
    }
  }
`;

export default async function Page() {
  const client = getClient();
  const { data } = await client.mutate({ mutation: query });
  console.log(data);

  return (
    <div style={{ margin: "20px" }}>
      <form action="api/login" method="POST">
        <div className="grid gap-6 mb-6 ">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              email
            </label>
            <input
              name="email"
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              password
            </label>
            <input
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="password"
            />
          </div>
          <button type="submit">login</button>
        </div>
      </form>
    </div>
  );
}
