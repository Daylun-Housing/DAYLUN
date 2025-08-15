import React from "react";

/**
 * NEWSLETTER
 * @returns {JSX.Element}
 * Subscription form. 
 * Known Issues: Still needs functionality added
 */
const Newsletter = () => {
  return (
    <form className="z-50 rounded px-8 pt-6 pb-8 mb-4 max-w-1/2">
      <div className="flex">
        <input
          className="grow mr-1 text-[var(--txt-dark)] transition ease-out delay-75 focus-within:border-2 focus-within:border-[var(--medium-blue)] h-14 pr-0.5 border border-[var(--medium-blue)] rounded caret-blue-700 outline-none px-4 disabled:border-slate-400"
          type="email"
          placeholder="Email address?"
        />
        <button
          className="bg-[var(--light-blue)] hover:bg-[var(--lighter-blue)] text-[var(--txt-bright)] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-slate-400"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </form>
  );
};

export default Newsletter;
