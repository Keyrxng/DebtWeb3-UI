import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import  Panel  from "../components/panels";
import { Section } from "../layout/section";
import { CarCrash, CreditCard, PaymentsRounded, PaymentRounded, HouseSiding, HouseSharp, SchoolSharp, CreditCardSharp, CarCrashSharp, HomeMaxSharp, HomeSharp, Person2Sharp, CarRentalSharp } from "@mui/icons-material";
import Head from 'next/head'
import Roadmap from "../components/Roadmap";

export default function Home() {
  return (
  <div className="flex flex-col items-center bg-slate-900 bg-gradient-to-br from-blue-300">      
      <Head>
        <title>DebtWebFree</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet"/>
      <script src="https://public.flourish.studio/resources/embed.js"></script>
      </Head>
      <nav className="flex flex-row justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-blue-300">
        <div className="flex flex-row items-center">
          <h1 className="text-2xl font-medium">DebtWebFree</h1>
        </div>
        <div className="flex flex-row items-center">
          <ConnectButton />
        </div>
      </nav>

      <h1 className="text-5xl font-medium">DebtWebFree</h1>
      <section className={`${styles.right} m-10 text-center w-full`}>
      <h2 className="text-xl font-medium text-right">The Solution</h2>
      <div className="flex flex-row">
      <img src="/consumer_over_time.png" alt="Consumer Debt Over Time" className="w-1/3 h-1/3" />
      <p className="text-xl font-light text-right">We're revolutionizing the way debt is viewed as an asset class by tokenizing it on the blockchain, making it more transparent and accessible to a wider range of investors. By tokenizing high-risk debts such as consumer credit loans, credit cards and payday loans, it opens up new opportunities and provides a more efficient and cost-effective market. This is all while making sure to comply with all regulations and laws. We are excited to be at the forefront of this change and making it accessible to everyone.</p>
      </div>
      
      </section>

      <div className="flex flex-row text-xl px-10 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-blue-300">
      <div className="absolute align-middle justify-center flex flex-row w-full">
      <h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">Debt Statistics</h2>
      </div>
      <Panel title="Mortgage" description="$10.93 trillion" >
          <HouseSharp/>
        </Panel>
        <Panel title="Auto Loan" description="$1.46 trillion" >
          <CarCrash/>
        </Panel>
        <Panel title="Credit Card" description="$1.103 trillion">
          <CreditCard/>
        </Panel>
        <Panel title="Student Loans" description="$1.75 trillion">
          <SchoolSharp />
        </Panel>
      </div>


      <section className={`${styles.left} m-10 text-center `}>
      <h2 className={`${styles.h2} text-xl font-medium text-left `}>The Problem</h2>
        <div className="flex flex-row">
        <p className="text-lg font-light text-left">The traditional methods of investing in debt have been controlled by banks and financial institutions, making it difficult for everyday investors to participate. This not only limits opportunities for individual investors but also can make it harder for borrowers to access capital, creating a lack of transparency and inefficiency in the lending process. Tokenizing debt on the blockchain aims to address this by creating a more accessible, transparent and efficient market.</p>
        <img src='/consumer_debt_by_gen.png' alt="Consumer Debt by Generation" className="w-1/3 h-1/3" />
        </div>  
    
      </section>

      <div className="flex flex-row text-xl px-10 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-blue-300">
      <div className="absolute align-middle justify-center flex flex-row w-full">
      <h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">Accounts by Debt Type</h2>
      </div>
      <Panel title="Mortgage" description="80.75 M" >
          <HouseSharp/>
        </Panel>
        <Panel title="Home Equity Revolving" description="12.81 M" >
          <HomeSharp/>
        </Panel>
        <Panel title="Auto Loan" description="112.02 M">
          <CarCrashSharp/>
        </Panel>
        <Panel title="Credit Card" description="519.96 M">
          <CreditCardSharp />
        </Panel>
      </div>

      <section className={`${styles.right} m-10 text-center border-2 rounded-3xl`}>
        <h2 className="text-xl font-medium text-center">The Benefits</h2>
        <p className="text-lg font-light">Tokenizing debt on the blockchain brings many benefits, including increased accessibility and transparency for investors, greater efficiency and cost-effectiveness in the lending process, and new investment opportunities. It also has the potential to democratize access to capital for borrowers, making it possible for a wider range of people to access funding. These benefits can lead to a more inclusive and transparent financial market, where everyone can participate.</p>
        <div class="flourish-embed flourish-chart" data-src="visualisation/7922238"></div>
      </section>

      <div className="flex flex-row text-xl px-10 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-blue-300">
      <div className="absolute align-middle justify-center flex flex-row w-full">
      <h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">Average Consumer Debt in 2022</h2>
      </div>
      <Panel title="Avg. Consumer Debt" description="$96,371" >
          <Person2Sharp/>
        </Panel>
        <Panel title="Avg. Household Debt" description="$155,038" >
          <HomeSharp/>
        </Panel>
        <Panel title="Avg. Mortgage Debt" description="$229,242">
          <HouseSharp/>
        </Panel>
        <Panel title="Avg. Auto Loan Debt" description="$19,865">
          <CarRentalSharp />
        </Panel>
      </div>

      <section className={`${styles.left} m-10 text-center border-2 rounded-3xl `}>
        <h2 className="text-xl font-medium text-center">Tokenomics</h2>
        
        <p className="text-lg font-light">A section outlining the tokenomics of the protocol.</p>
      </section>

      <div className="flex flex-row text-xl px-10 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-blue-300">
      <div className="absolute align-middle justify-center flex flex-row w-full">
      <h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">Average Consumer Debt in 2022</h2>
      </div>
      <Panel title="Avg. Consumer Debt" description="$96,371" >
          <Person2Sharp/>
        </Panel>
        <Panel title="Avg. Household Debt" description="$155,038" >
          <HomeSharp/>
        </Panel>
        <Panel title="Avg. Mortgage Debt" description="$229,242">
          <HouseSharp/>
        </Panel>
        <Panel title="Avg. Auto Loan Debt" description="$19,865">
          <CarRentalSharp />
        </Panel>
      </div>

      <section className={`${styles.right} m-10 text-center border-2 rounded-3xl`}>
        <h2 className="text-xl font-medium text-center">Team</h2>
        <p className="text-lg font-light">A section outlining the team behind the protocol.</p>
      </section>

      <Roadmap/>


    </div>
  )
}
