"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import SecretPhraseDisplay from "./Phrase";

import { generateMnemonic } from "bip39";

const Generate = () => {
  const [generate, setGenerate] = useState(false);
  const [mnemonic, setMnemonic] = useState([]);
  // useEffect(() => {
  //   if (mnemonic) {
  //     console.log("Mnemonic from state:", mnemonic);
  //   }
  // }, [mnemonic]);
  return (
    <div className="p-6 text-white ">
      {generate ? (
        <div>
          <SecretPhraseDisplay mnemonic={mnemonic} />

          <h2 className="text-4xl font-bold">Solana Wallet</h2>
          <div className="mt-4 flex space-x-4">
            <button className="bg-white text-black px-6 py-2 rounded-md font-semibold">
              Add Wallet
            </button>
            <button
              className="bg-red-700 text-white px-6 py-2 rounded-md font-semibold"
              onClick={() => setGenerate(false)}
            >
              Clear Wallets
            </button>
          </div>
          <div className="bg-[#121212] text-white p-6 rounded-xl mt-6 space-y-4">
            <h3 className="text-2xl font-bold">Wallet 1</h3>
            <div>
              <p className="text-lg font-semibold">Public Key</p>
              <p className="text-sm">
                FzgntbopX6ejvghaPgwoqk4jCVC54LEr46APonvmQbix
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Private Key</p>
                <p className="text-sm">
                  ••••••••••••••••••••••••••••••••••••••
                </p>
              </div>
              <span className="text-gray-400 cursor-pointer hover:text-white">
                👁
              </span>
            </div>
          </div>
        </div>
      ) : (
        // Input UI - shows when generate is false
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Enter Secret Recovery Phrase
          </h1>
          <div className="flex items-center space-x-4 bg-black p-4 rounded-md">
            <input
              type="password"
              id="text"
              name="text"
              className="mt-1 w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter Secret Recovery Phrase or add to create new"
            />
            <button
              type="button"
              className="px-4 py-4 w-full max-w-[200px] bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition duration-200"
              onClick={async () => {
                const mn = await generateMnemonic();
                // console.log(mn);
                setMnemonic(mn);
                setGenerate(true);
              }}
            >
              Generate Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generate;
