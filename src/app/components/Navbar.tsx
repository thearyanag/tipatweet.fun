import { signOut, signIn, auth } from "@/auth";
export default async function Navbar() {
  async function handleSignOut() {
    "use server";
    await signOut();
  }

  async function handleSignIn() {
    "use server";
    await signIn();
  }

  async function isSignedIn() {
    "use server";
    let session = await auth();
    return session?.user ? true : false;
  }

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black text-white py-6 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-24"></div>
        <h1 className="text-2xl font-bold">
          tipa<span className="text-sky-400">tweet</span>.fun
        </h1>
        <div className="relative w-24 flex justify-end">
          {(await isSignedIn()) ? (
            <form
              action={handleSignOut}
              className="flex items-center space-x-4"
            >
              {" "}
              <button className="rounded-full border-sky-400 border-2 px-4 py-2 text-sky-400 hover:bg-sky-400 hover:text-white transition-colors duration-300 text-sm font-semibold">
                Logout
              </button>
            </form>
          ) : (
            <form action={handleSignIn} className="flex items-center space-x-4">
              {" "}
              <button className="rounded-full border-sky-400 border-2 px-4 py-2 text-sky-400 hover:bg-sky-400 hover:text-white transition-colors duration-300 text-sm font-semibold">
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}
