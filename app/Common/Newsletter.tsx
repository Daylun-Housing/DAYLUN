import React from "react";

const Newsletter = () => {
  return (
    <form className="z-50 rounded px-8 pt-6 pb-8 mb-4 max-w-1/2">
      <div className="flex">
        <input
          className="grow mr-1 text-black transition ease-out delay-75 focus-within:border-2 focus-within:border-blue-600 h-14 pr-0.5 border border-blue-600 rounded caret-blue-700 outline-none px-4 disabled:border-slate-400"
          type="email"
          placeholder="Email address?"
        />
        <button
          className="bg-[#0474BC] hover:bg-[#015185] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-400"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default Newsletter;