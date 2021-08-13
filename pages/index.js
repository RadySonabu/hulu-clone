import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
	return (
		<div>
			<Head>
				<title>HULU</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<body className="bg-black text-gray-300">
				{/* Header */}
				<Header />
				{/* Navbar */}
				{/* Results */}
			</body>
		</div>
	);
}
