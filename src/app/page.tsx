import Navbar from "./components/Navbar";
import TipsTable from "./components/TIpsTable";
import Profile from "./components/Profile";
import LoginScreen from "./components/Login";
import { auth } from "@/auth";

export default async function Home() {
  const sesssion = await auth();

  const isAuth = sesssion?.user ? true : false;

  return isAuth ? (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <Navbar />
      <main className="container mx-auto p-4">
        <Profile
          image={
            sesssion?.user?.image?.replace("normal", "400x400") ||
            "/profile.jpg"
          }
          name={sesssion?.user?.name || ""}
          username={(sesssion?.user as any).username || ""}
          bio="dev, i like to build cool stuff"
          totalTipsSOL={420}
          totalTipsUSDC={69}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-4">
            <TipsTable />
          </div>
        </div>
      </main>
    </div>
  ) : (
    <LoginScreen />
  );
}
