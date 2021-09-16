import { signIn, signOut, useSession } from "next-auth/client";
import { useState } from "react";
import imageTest from "../dummyData";

export default function Home() {
  const [session, loading] = useSession();
  const [testMode, setTestMode] = useState(true);
  const [data, setData] = useState([]);

  return (
    <div>
      {loading && <p>Loading..</p>}
      {!session && (
        <>
          Not signed in <br />
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: process.env.BASE_URL,
              })
            }
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <div>
          <p>Signed in as {session.user.name}</p> <br />
          <button onClick={() => signOut()}>Sign out</button>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
