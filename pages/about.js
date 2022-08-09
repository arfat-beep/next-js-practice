import Head from "next/head";
import Image from "next/image";
import React from "react";
import Navbar from "../Components/NavBar";
const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Navbar />
      <h1>this is about page</h1>
      <div style={{ width: 600, height: 200 }}>
        <Image
          alt="random"
          width="300"
          height="500"
          src={"https://i.ibb.co/bJQc3z8/arfat-xyz-the-raaj-slider1-1.jpg"}
        />
      </div>
    </>
  );
};

export default about;
