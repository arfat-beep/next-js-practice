import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul className="menu-bar">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/blogs">
            <a>Blog</a>
          </Link>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
