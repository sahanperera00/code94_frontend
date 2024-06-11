import React from "react";

export default function Searchbar() {
  return (
    <div className="relative bg-[#] flex items-center w-[40vw]">
      <input
        placeholder="Search for products"
        type="text"
        className="h-[60px] w-full rounded-full bg-[#f7f7f7] px-7"
      />
      <button
        onClick={() => {}}
        className="absolute right-2 px-8 py-3 rounded-full font-semibold bg-[#001eb9] text-white flex items-center gap-1"
      >
        <span class="material-symbols-outlined">search</span>
        Search
      </button>
    </div>
  );
}
