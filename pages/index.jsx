import styles from "../styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Panel from "../components/panels";
import { Section } from "../layout/section";
import {
	CarCrash,
	CreditCard,
	HouseSharp,
	SchoolSharp,
	CreditCardSharp,
	CarCrashSharp,
	HomeSharp,
	Person2Sharp,
	CarRentalSharp,
  // Twitter,
  // Telegram,
  // GitHub,
  MenuBookSharp,
} from "@mui/icons-material";
import Head from "next/head";
import Roadmap from "../components/Roadmap";
import { Discord, Twitter, Telegram, Github, Book } from "@web3uikit/icons";

export default function Home() {
	return (
		<div className="flex flex-col items-center bg-slate-900 bg-gradient-to-br from-blue-100">
			<Head>
				<title>DebtWebFree</title>
				<link rel="icon" href="/favicon.ico" />
				<link
					href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
					rel="stylesheet"
				/>
				<script src="https://public.flourish.studio/resources/embed.js"></script>
			</Head>
			<nav className="flex flex-row justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-green-100">
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
					<img
						src="/consumer_over_time.png"
						alt="Consumer Debt Over Time"
						className="w-1/3 h-1/3"
					/>
					<p className="text-xl font-light text-right">
						We're revolutionizing the way debt is viewed as an asset
						class by tokenizing it on the blockchain, making it more
						transparent and accessible to a wider range of
						investors. By tokenizing high-risk debts such as
						consumer credit loans, credit cards and payday loans, it
						opens up new opportunities and provides a more efficient
						and cost-effective market. This is all while making sure
						to comply with all regulations and laws. We are excited
						to be at the forefront of this change and making it
						accessible to everyone.
					</p>
				</div>
			</section>

			<div className="flex flex-row text-xl px-10 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-green-100">
				<div className="absolute align-middle justify-center flex flex-row w-full">
					<h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">
						Debt Statistics
					</h2>
				</div>
				<Panel title="Mortgage" description="$10.93 trillion">
					<HouseSharp />
				</Panel>
				<Panel title="Auto Loan" description="$1.46 trillion">
					<CarCrash />
				</Panel>
				<Panel title="Credit Card" description="$1.103 trillion">
					<CreditCard />
				</Panel>
				<Panel title="Student Loans" description="$1.75 trillion">
					<SchoolSharp />
				</Panel>
			</div>

			<section className={`${styles.left} m-10 text-center `}>
				<h2 className={`${styles.h2} text-xl font-medium text-left `}>
					The Problem
				</h2>
				<div className="flex flex-row">
					<p className="text-lg font-light text-left">
						The traditional methods of investing in debt have been
						controlled by banks and financial institutions, making
						it difficult for everyday investors to participate. This
						not only limits opportunities for individual investors
						but also can make it harder for borrowers to access
						capital, creating a lack of transparency and
						inefficiency in the lending process. Tokenizing debt on
						the blockchain aims to address this by creating a more
						accessible, transparent and efficient market.
					</p>
					<img
						src="/consumer_debt_by_gen.png"
						alt="Consumer Debt by Generation"
						className="w-1/3 h-1/3"
					/>
				</div>
			</section>

			<div className="flex flex-row text-xl px-10 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-green-100">
				<div className="absolute align-middle justify-center flex flex-row w-full">
					<h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">
						Accounts by Debt Type
					</h2>
				</div>
				<Panel title="Mortgage" description="80.75 M">
					<HouseSharp />
				</Panel>
				<Panel title="Home Equity Revolving" description="12.81 M">
					<HomeSharp />
				</Panel>
				<Panel title="Auto Loan" description="112.02 M">
					<CarCrashSharp />
				</Panel>
				<Panel title="Credit Card" description="519.96 M">
					<CreditCardSharp />
				</Panel>
			</div>

			<section
				className={`${styles.right} m-10 text-center`}
			>
				<h2 className="text-xl font-medium text-center">
					The Benefits
				</h2>
				<p className="text-lg font-light">
					Tokenizing debt on the blockchain brings many benefits,
					including increased accessibility and transparency for
					investors, greater efficiency and cost-effectiveness in the
					lending process, and new investment opportunities. It also
					has the potential to democratize access to capital for
					borrowers, making it possible for a wider range of people to
					access funding. These benefits can lead to a more inclusive
					and transparent financial market, where everyone can
					participate.
				</p>
				<div
					class="flourish-embed flourish-chart"
					data-src="visualisation/7922238"
				></div>
			</section>

			<div className="flex flex-row text-xl px-10 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-green-100">
				<div className="absolute align-middle justify-center flex flex-row w-full">
					<h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">
						Average Consumer Debt in 2022
					</h2>
				</div>
				<Panel title="Avg. Consumer Debt" description="$96,371">
					<Person2Sharp />
				</Panel>
				<Panel title="Avg. Household Debt" description="$155,038">
					<HomeSharp />
				</Panel>
				<Panel title="Avg. Mortgage Debt" description="$229,242">
					<HouseSharp />
				</Panel>
				<Panel title="Avg. Auto Loan Debt" description="$19,865">
					<CarRentalSharp />
				</Panel>
			</div>

			<section
				className={`${styles.left} m-10 text-center `}
			>
				<h2 className="text-xl font-medium text-center">The Team</h2>

				<p className="text-lg font-light">
					<div className="flex flex-row">
						<p className="text-lg font-light text-left">
							The team behind will continute to expand as the
							project moves into future phases. We are
							currently looking for a few more team members to
							help us build out the project. If you are interested
							in joining the team, please reach out to us on our
							discord or twitter.
						</p>
					</div>
				</p>
			</section>

			<div className="flex flex-row text-xl px-10 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-green-100">
				<div className="absolute align-middle justify-center flex flex-row w-full">
					<h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">
						Facts About Debt
					</h2>
				</div>
				<Panel
					title="Debt Industry TVL"
					description="Debt is a $14.5 trillion industry in the US"
				>
					<Person2Sharp />
				</Panel>
				<Panel
					title="As an Asset Class"
					description="Debt is the largest asset class in the world"
				>
					<HomeSharp />
				</Panel>
				<Panel
					title="Rate of Occurance"
					description="A Typical family has more debt than income"
				>
					<HouseSharp />
				</Panel>
				<Panel
					title="In Regards to Health"
					description="Debt levels and stress less are intertwined"
				>
					<CarRentalSharp />
				</Panel>
			</div>

			<section
				className={`${styles.right} m-10 text-center`}
			>
				<h2 className="text-xl font-medium text-center">Tokenomics</h2>
				<p className="text-lg font-light">
					Our tokenomics is built around two main tokens, a stable
					coin and a utility token. The stable coin will be used as a
					means of payment and collateral within our own DeFi
					ecosystem while the utility token is designed to interact
					with other DeFi protocols. This allows for increased
					liquidity and accessibility for our users. Our ultimate goal
					is to democratize access to financial services and provide a
					more inclusive and transparent financial market for all.
				</p>
			</section>

			<div className="flex flex-row text-xl px-10 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-green-100">
				<div className="absolute align-middle justify-center flex flex-row w-full">
					<h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">
						Protocol DeFi Mechanics
					</h2>
				</div>
				<Panel
					title="StableDW3"
					description="Our algo-pegged stablecoin using protocol TVL and liquid debt as part of the algorithim"
				>
					<Person2Sharp />
				</Panel>
				<Panel
					title="DW3"
					description="Our utility token that can be used to interact with branches of the protocol"
				>
					<HomeSharp />
				</Panel>
			</div>

			<Roadmap />

      {/* footer with social links */}
      <footer className="flex flex-row mt-16 justify-between w-full p-4 bg-slate-900 bg-gradient-to-br from-blue-300">
          <div className="flex flex-col">
          <h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">
            Navigation
          </h2>
          <nav>
            <ul className="flex flex-col">
              <li><a href="/aboutUs" className="text-white hover:text-gray-300">About Us</a></li>
              <li><a href="/roadmap" className="text-white hover:text-gray-300">Roadmap</a></li>
              <li><a href="/tokenomics" className="text-white hover:text-gray-300">Tokenomics</a></li>
              <li><a href="/team" className="text-white hover:text-gray-300">Team</a></li>
            </ul>
          </nav>
          </div>

          {/* space in the middle for sponsor logos and partnerships */}

          <div className="flex flex-col">
          <h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">
            Partnerships
          </h2>
          <nav className="">
            <ul className="flex flex-row justify-between m-2 p-2 w-full text-center items-center">
              <p>
                As we are in the early stages of development, we are currently
                looking for partnerships. If you are interested in partnering
                with us, please contact us at this email.
                <a href="mailto:keyrxng@proton.me" className="text-white items-center text-center align-middle justify-center hover:text-gray-300">
                  {' '} keyrxng@proton.me
                </a>
              </p>
            </ul>
          </nav>
          <h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">
            Partnerships
          </h2>
          </div>



          <div>
          <h2 className="text-2xl font-medium align-middle justify-center text-center flex flex-wrap">
            Connect
          </h2>


          
          
          <nav>
            <ul className="flex flex-col">
            <li className="flex flex-row align-middle justify-center items-center">
            <Discord style={{width: '40%', height: '40%'}}/>
              <a href="https://twitter.com/keyrxng" className="text-white hover:text-gray-300">
              Discord
              </a>
              </li>
              <li className="flex flex-row align-middle justify-center items-center">
              <Twitter style={{width: '40%', height: '40%'}}/>
              <a href="https://twitter.com/keyrxng" className="text-white hover:text-gray-300">
              Twitter
              </a>
              </li>
              <li className="flex flex-row align-middle justify-center items-center">
              <Github style={{width: '40%', height: '40%'}}/>
              <a href="https://github.com/Keyrxng" className="text-white hover:text-gray-300">
              Github
              </a>
              </li>
              <li className="flex flex-row align-middle justify-center items-center">
              <Book style={{width: '40%', height: '40%'}}/>
              <a href="https://twitter.com/keyrxng" className="text-white hover:text-gray-300">
              Medium
              </a>
              </li>
            </ul>
          </nav>
          </div>
      </footer>
		</div>
	);
}
