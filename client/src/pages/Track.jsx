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
        <Cwraps />
      </div>
    </div>
  );
}

export default Track;
