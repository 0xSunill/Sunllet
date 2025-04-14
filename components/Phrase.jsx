"use client";
import React, { useState } from "react";

const SecretPhraseDisplay = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const phrase = [
    "mother",
    "cherry",
    "collect",
    "damage",
    "senior",
    "echo",
    "reflect",
    "explain",
    "maximum",
    "pistol",
    "nothing",
    "inspire",
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(phrase.join(" "));
    alert("Secret phrase copied!");
  };

  return (
    <div
      className=" bg-[#121212] text-white p-6 rounded-xl my-6 space-y-4 cursor-pointer"
      onClick={handleCopy}
    >
      <div
        className="flex justify-between items-center"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        <h2 className="text-3xl font-bold">Your Secret Phrase</h2>
        <span className="text-xl">{isExpanded ? "▾" : "▸"}</span>
      </div>

      {isExpanded && (
        <>
          <div className="mt-6 grid grid-cols-4 gap-4">
            {phrase.map((word, index) => (
              <div
                key={index}
                className="bg-[#121212] px-4 py-3 rounded-lg text-lg"
              >
                {word}
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-400 text-sm">
            📋 Click Anywhere To Copy
          </p>
        </>
      )}
    </div>
  );
};

export default SecretPhraseDisplay;
