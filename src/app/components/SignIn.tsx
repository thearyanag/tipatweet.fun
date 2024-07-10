import { signIn, auth, signOut } from "@/auth";

export async function SignIn() {
  const sesssion = await auth();
  return (
    <>
      {sesssion?.user ? (
        <>
          <p>{sesssion?.user.name}</p>
          <p>{(sesssion.user as any).username}</p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button type="submit">Signout</button>
          </form>
        </>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("twitter");
          }}
        >
          <button type="submit">Signin with Twitter</button>
        </form>
      )}
    </>
  );
}
