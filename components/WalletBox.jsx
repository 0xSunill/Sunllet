"use client";
import React, { useState } from "react";

const WalletBox = ({ wallet, index }) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);

  return (
    <div className="bg-[#121212] text-white p-6 rounded-xl mt-6 space-y-4">
      <h3 className="text-2xl font-bold">Wallet {index + 1}</h3>
      <div>
        <p className="text-lg font-semibold">Public Key</p>
        <p className="text-sm break-all">{wallet.publicKey}</p>
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
