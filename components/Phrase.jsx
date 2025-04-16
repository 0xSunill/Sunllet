"use client";
import React, { useState } from "react";

const SecretPhraseDisplay = ({ mnemonic = [] }) => {
  const phrase = Array.isArray(mnemonic)
    ? mnemonic
    : mnemonic?.split(" ") || [];
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = () => {
    if (mnemonic.length === 0) return;
    navigator.clipboard.writeText(phrase.join(" "));
    alert("Secret phrase copied!");
  };

  return (
    <div
      className="bg-[#121212] text-white p-4 md:p-6 rounded-xl my-6 space-y-4 cursor-pointer"
      onClick={handleCopy}
    >
      <div
        className="flex justify-between items-center"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">Your Secret Phrase</h2>
        <span className="text-xl">{isExpanded ? "▾" : "▸"}</span>
      </div>

      {isExpanded && (
        <>
          <div className="mt-4 md:mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {phrase.map((word, index) => (
              <div
                key={index}
                className="bg-[#1e1e1e] px-3 py-2 md:px-4 md:py-3 rounded-lg text-base md:text-lg"
              >
                {word}
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-400 text-xs md:text-sm">
            📋 Click Anywhere To Copy
          </p>
        </>
      )}
    </div>
  );
};

export default SecretPhraseDisplay;
