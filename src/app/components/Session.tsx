import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth].js";
import Logout from "./Logout";
import Login from "./Login";

export default async function Session() {
  let session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session ? (
        <span>
          {session.user?.email}
          <Logout />
        </span>
      ) : (
        <Login />
      )}
    </div>
  );
}
