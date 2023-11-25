import Image from "next/image";
import { Inter } from "next/font/google";
import Splash from "./Splash";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Swift EMS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Splash />
    </>
  );
}
