import React from "react";
import { PlayCircle } from "lucide-react"; // যদি চাইলে বাদ দিতে পারো

const HeroSection = () => {
  return (
    <section className="bg-purple-700 text-white text-center px-4 py-20">
      {/* Top small heading */}
      <p className="inline-block text-white font-semibold text-sm md:text-base px-3 py-1 rounded-md">
        Super. Simple. Banking.
      </p>

      {/* Main heading */}
      <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-3xl mx-auto">
        Banking technology <br /> that has your back.
      </h1>

      {/* Sub heading */}
      <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-purple-100">
        Simple, transparent banking. No hidden fees and free overdrafts.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Demo button */}
        <button className="flex items-center gap-2 px-7 py-4 rounded-lg border border-white bg-white text-purple-700 font-semibold text-lg shadow-sm hover:bg-gray-100 transition">
          <PlayCircle size={22} className="text-purple-700" />
          Demo
        </button>

        {/* Sign up button */}
        <button className="px-7 py-4 rounded-lg border border-white bg-purple-600 text-white font-semibold text-lg shadow-sm hover:bg-purple-800 transition">
          Sign up
        </button>
      </div>

      {/* Image below buttons */}
      <div className="mt-12 flex justify-center">
        <img
          src="https://www.vhv.rs/dpng/d/412-4120626_credit-card-transparent-credit-card-no-background-hd.png"
          alt="Credit Card"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
