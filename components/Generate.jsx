import React from "react";

const Generate = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold">Enter Secret Recovery Phrase</h1>
      <div className="flex items-center space-x-4 bg-black p-4 rounded-md">
        <input
          type="text"
          id="text"
          name="text"
          class="mt-1 w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter Secret Recovery Phrase or add to create new"
        />
        <button
          type="submit"
          class="px-4 py-4 w-full max-w-[200px] bg-white text-black font-bold py-2 px-4 rounded-xl hover:bg-gray-200 transition duration-200"
        >
          Generate Wallet
        </button>
      </div>
    </div>
  );
};

export default Generate;
