import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import  Panel  from "../components/panels";
import { Section } from "../layout/section";

import Head from 'next/head'
import Roadmap from "../components/Roadmap";

export default function Home() {
  return (
<div className="flex flex-col items-center bg-slate-900 bg-gradient-to-br from-blue-300">      
      <Head>
        <title>DebtWebFree</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      </Head>
      <section className="mt-10 text-center">
        <h1 className="text-5xl font-medium">DebtWebFree</h1>
        <p className="text-lg font-light">We're revolutionizing the way debt is viewed as an asset class by tokenizing it on the blockchain, making it more transparent and accessible to a wider range of investors. By tokenizing high-risk debts such as consumer credit loans, credit cards and payday loans, it opens up new opportunities and provides a more efficient and cost-effective market. This is all while making sure to comply with all regulations and laws. We are excited to be at the forefront of this change and making it accessible to everyone.</p>
      </section>

      <section className={styles.left}>
        <h2 className="text-xl font-medium text-center">Problem</h2>
        <p className="text-lg font-light">The traditional methods of investing in debt have been controlled by banks and financial institutions, making it difficult for everyday investors to participate. This not only limits opportunities for individual investors but also can make it harder for borrowers to access capital, creating a lack of transparency and inefficiency in the lending process. Tokenizing debt on the blockchain aims to address this by creating a more accessible, transparent and efficient market.</p>
      </section>

      <section className={styles.right}>
        <h2 className="text-xl font-medium text-center">Benefits</h2>
        <p className="text-lg font-light">Tokenizing debt on the blockchain brings many benefits, including increased accessibility and transparency for investors, greater efficiency and cost-effectiveness in the lending process, and new investment opportunities. It also has the potential to democratize access to capital for borrowers, making it possible for a wider range of people to access funding. These benefits can lead to a more inclusive and transparent financial market, where everyone can participate.</p>
      </section>

      <section className={styles.right}>
        <h2 className="text-xl font-medium text-center">Tokenomics</h2>
        <p className="text-lg font-light">A section outlining the tokenomics of the protocol.</p>
      </section>

      <section className={styles.right}>
        <h2 className="text-xl font-medium text-center">Team</h2>
        <p className="text-lg font-light">A section outlining the team behind the protocol.</p>
      </section>

      <Roadmap/>


    </div>
  )
}
