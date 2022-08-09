import React from "react";
import { useRouter } from "next/router";
import NavBar from "../../Components/NavBar";

const pageNo = () => {
  const router = useRouter();
  return (
    <div>
      <NavBar />
      <h1>this is page number {router.query.pageNo}</h1>
    </div>
  );
};

export default pageNo;
