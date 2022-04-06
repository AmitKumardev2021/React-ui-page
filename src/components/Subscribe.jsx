import React from "react";

const Subscribe = () => {
  return (
    <div className="w-full px-4 py-16 bg-black text-white text-center">
      <h1>Join our Defi community </h1>
      <div className="py-4">
        <input
          className="p-3 rounded-2xl mr-4"
          type="email"
          placeholder="Enter Your Email"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex items-center justify-center">
        <input className="mr-2" type="checkbox" />
        <p>Yes,I am agree to receive email communications from Defi</p>
      </div>
    </div>
  );
};

export default Subscribe;
