import { ConnectButton } from "@rainbow-me/rainbowkit";
import Head from "next/head";
import AdminPanel from "../components/admin";
import Pools from "../components/Pools";

export default function dApp() {

  const fakePools = [  
    {
    id: 1,
    tokens: [{ name: "DW3", symbol: "DW3" }, { name: "Tether", symbol: "USDC" }],
    tvl: { value: "100", token: "XYZ" },
    pairShare: "50%",
    dailyVolume: "900,000 DW3",
    feesEarned: "90,000 DW3"
  },
  {
    id: 2,
    tokens: [{ name: "DW3", symbol: "DW3" }, { name: "WETH", symbol: "WETH" }],
    tvl: { value: "200", token: "WETH" },
    pairShare: "40%",
    dailyVolume: "80 WETH",
    feesEarned: "8 WETH"
  },
  {
    id: 3,
    tokens: [{ name: "DW3", symbol: "DW3" }, { name: "USDC", symbol: "USDC" }],
    tvl: { value: "300", token: "DW3" },
    pairShare: "60%",
    dailyVolume: "1,120,12 DW3",
    feesEarned: "120,12 DW3"
  }
];

  return (
    <><Head>
      <title>DebtWebFree</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet" />
      <script src="https://public.flourish.studio/resources/embed.js"></script>
    </Head><nav className="flex flex-row justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-green-100">
        <div className="flex flex-row items-center">
          <h1 className="text-2xl font-medium">DebtWebFree</h1>
        </div>
        <div className="flex flex-row items-center">
          <ConnectButton />
        </div>
      </nav>
        <Pools pools={fakePools} />
        <AdminPanel/>
      </>
  );
}