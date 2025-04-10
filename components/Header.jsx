import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full  ">
      <nav className="max-w-[1440px] mx-auto flex   justify-between items-center">
        <Link
          href="/"
          className="flex justify-self-center items-center sm:font-extrabold sm:text-3xl text-2xl font-bold "
        >
          <span className="">SunLLeT</span>
        </Link>

        <div className="">
          <select className="bg-black text-white" name="network" id="network">
            <option value="sol">Solana</option>
            <option value="eth">Ethereum</option>
            <option value="sui">Sui</option>
          </select>
        </div>
      </nav>
    </div>
  );
};

export default Header;
