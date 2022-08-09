import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/404.module.css";
import NavBar from "../Components/NavBar";

const ErrorPage = () => {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <div id={styles.main}>
        <div className="fof">
          <h1>Error 404</h1>
          <style jsx>
            {`
              h1 {
                color: red;
              }
            `}
          </style>
          <div>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </div>
          <div>
            <button onClick={() => router.push("/")}>ghore ja</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
