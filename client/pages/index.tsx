import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import App from "../src/App";

export default function Home() {
  return <App />;
}

// fetch dynamic data from API (getInitialProps is deprecated)
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api");
  const tasks = await res.json();

  return {
    props: {
      tasks,
    },
  };
};
