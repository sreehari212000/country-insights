import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Filter = ({ searchTerm, setSearchTerm, setFilter, filter }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="flex flex-col items-start mx-7 mt-7 md:flex-row md:justify-between min-w-[340px] max-w-[1440px] xl:mx-auto">
      <div
        className={`flex items-center w-[95%] md:w-[500px] ${
          darkMode ? "bg-[#2b3945] text-white" : "bg-white"
        } py-1 px-5 gap-4 rounded-md`}
      >
        <AiOutlineSearch />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`outline-none py-2 w-full ${
            darkMode ? "bg-[#2b3945]" : "bg-white"
          }`}
          placeholder="Search for a country..."
        />
      </div>

      <select
        id=""
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={`mt-7 md:mt-0 py-3 px-4 text-xs outline-none rounded-md ${
          darkMode ? "bg-[#2b3945] text-white" : "bg-white "
        }`}
      >
        <option value="all" disabled selected hidden>
          Filter By Region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
