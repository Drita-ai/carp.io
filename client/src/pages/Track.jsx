import React from "react";

import { Card, CardBody } from "@heroui/react";
import SearchBar from "../components/SearhcBar";
import Cwraps from "../components/track/Cwraps";

function Track() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="my-4">
        <SearchBar />
      </div>

      <div className="w-[50%] space-y-3 my-5 p-6 rounded-xl shadow-lg bg-[#1a1a1a]">
        <div className="flex justify-end">
          <button className="px-4 py-2 text-sm font-medium bg-white text-black border border-neutral-600 rounded-md hover:bg-neutral-400 transition-colors duration-200">
            Add Carp
          </button>
        </div>
        <Cwraps />
      </div>
    </div>
  );
}

export default Track;
