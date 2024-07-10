import Navbar from "./components/Navbar";
import TipsTable from "./components/TIpsTable";
import Profile from "./components/Profile";
import LoginScreen from "./components/Login";
export default function Home() {
  const tips = [
    { amount: "5$", link: "https://tiplink.io/t#4JoRiNvTR5Uyn45ST" },
    { amount: "10$", link: "https://tiplink.io/t#4JoRiNvTR5Uyn45ST" },
    { amount: "69$", link: "https://tiplink.io/t#4JoRiNvTR5Uyn45ST" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      <Navbar />
      <main className="container mx-auto p-4">
        <Profile
          image="https://pbs.twimg.com/profile_images/1716974438464339968/YN2EYZEH_400x400.jpg"
          name="aryan"
          username="_0xaryan"
          bio="dev, i like to build cool stuff"
          totalTipsSOL={420}
          totalTipsUSDC={69}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-4">
            <TipsTable tips={tips} />
          </div>
        </div>
      </main>
    </div>
  );
  // return (
  //   <LoginScreen />
  // )
}
