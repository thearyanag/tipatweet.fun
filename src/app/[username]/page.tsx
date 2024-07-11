import Link from "next/link";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

export default function Username({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <Navbar />
      <main className="container mx-auto p-4">
        <Profile
          image={"/profile.jpg"}
          name="jacob"
          username="jacob"
          bio="dev, i like to build cool stuff"
          totalTipsSOL={420}
          totalTipsUSDC={69}
        />
        <div className="bg-gradient-to-r from-gray-900 to-black text-white p-8 rounded-xl mb-12 shadow-lg border border-gray-700">
          <p className="text-center">
            Want to make your own page?{" "}
            <Link
              className="italic text-blue-400"
              href={"https://tipatweet.fun/"}
            >
              login here
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
