"use client";
// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const WalletBox = ({ wallet, index }) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);

  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

        const publicKey = new PublicKey(wallet.publicKey);
        // const publicKey = new PublicKey("");
        const lamports = await connection.getBalance(publicKey);
        console.log(lamports);
        setBalance(lamports / 1e9);
      } catch (err) {
        console.error("Error fetching balance:", err);
      }
    };

    fetchBalance();
  }, [wallet.publicKey]);

  return (
    <div className="bg-[#121212] text-white p-6 rounded-xl mt-6 space-y-4">
      <h3 className="text-2xl font-bold">Wallet {index + 1}</h3>
      <div>
        <p className="text-lg font-semibold">Public Key</p>
        <p className="text-sm break-all">
          {wallet.publicKey}{" "}
          {balance !== null && `| 💰 ${balance.toFixed(4)} SOL`}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg font-semibold">Private Key</p>
          <p className="text-sm break-all">
            {showPrivateKey
              ? wallet.privateKey
              : "••••••••••••••••••••••••••••••••••••••"}
          </p>
        </div>
        <span
          className="text-gray-400 cursor-pointer hover:text-white"
          onClick={() => setShowPrivateKey(!showPrivateKey)}
        >
          👁
        </span>
      </div>
    </div>
  );
};

export default WalletBox;
