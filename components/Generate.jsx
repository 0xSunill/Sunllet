"use client";
import React, { useState } from "react";
import SecretPhraseDisplay from "./Phrase";
import { mnemonicToSeed, generateMnemonic } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import WalletBox from "./WalletBox";
import nacl from "tweetnacl";
import bs58 from "bs58";

const Generate = () => {
  const [generate, setGenerate] = useState(false);
  const [mnemonic, setMnemonic] = useState("");
  const [inputMnemonic, setInputMnemonic] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [wallets, setWallets] = useState([]);

  const generateWalletFromMnemonic = async (mn) => {
    const seed = await mnemonicToSeed(mn);
    const path = `m/44'/501'/${currentIndex}'/0'`;
    const derivedSeed = derivePath(path, seed.toString("hex")).key;
    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
    const keypair = Keypair.fromSecretKey(secret);
    const wallet = {
      publicKey: keypair.publicKey.toBase58(),
      privateKey: bs58.encode(keypair.secretKey),
    };

    setCurrentIndex((prev) => prev + 1);
    setWallets((prev) => [...prev, wallet]);
  };

  return (
    <div className="p-6 text-white">
      {generate ? (
        <div>
          <SecretPhraseDisplay mnemonic={mnemonic.split(" ")} />

          <h2 className="text-4xl font-bold">Solana Wallet</h2>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => generateWalletFromMnemonic(mnemonic)}
              className="bg-white text-black px-6 py-2 rounded-md font-semibold"
            >
              Add Wallet
            </button>
            <button
              className="bg-red-700 text-white px-6 py-2 rounded-md font-semibold"
              onClick={() => {
                setGenerate(false);
                setMnemonic("");
                setWallets([]);
                setCurrentIndex(0);
              }}
            >
              Clear Wallets
            </button>
          </div>
          <div>
            {wallets.map((wallet, index) => (
              <WalletBox key={index} wallet={wallet} index={index} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-5xl font-bold mb-6">
            Enter Secret Recovery Phrase
          </h1>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
            <input
              type="text"
              className="w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Enter Secret Recovery Phrase or click generate"
              value={inputMnemonic}
              onChange={(e) => setInputMnemonic(e.target.value)}
            />
            <button
              type="button"
              className="px-4 py-4 w-full md:max-w-[200px] bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition duration-200"
              onClick={async () => {
                const mn = inputMnemonic.trim();
                const valid = mn.split(" ").length === 12;
                if (!valid) return alert("Enter a valid 12-word phrase");

                setMnemonic(mn);
                setGenerate(true);
                setInputMnemonic("");
              }}
            >
              Use Existing
            </button>
            <button
              type="button"
              className="px-4 py-4 w-full md:max-w-[200px] bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition duration-200"
              onClick={async () => {
                const mn = await generateMnemonic();
                setMnemonic(mn);
                setGenerate(true);
              }}
            >
              Generate New
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generate;
