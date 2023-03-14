import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";

import Home from "../src/Components/Home";

export default function App() {
  return <Home />;
}

// fetch dynamic data from API (getInitialProps is deprecated)
export const getServerSideProps = async () => {
  // access to pages/api/tasks
  const res = await fetch("http://localhost:3000/api/tasks");
  const tasks = await res.json();
  return {
    props: {
      tasks,
    },
  };
};
