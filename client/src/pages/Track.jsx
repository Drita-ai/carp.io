import React, { useState } from "react";

import { Card, CardBody } from "@heroui/react";

import Button from '../components/Button';
import SearchBar from "../components/SearhcBar";
import Cwraps from "../components/track/Cwraps";
import Modal from '../components/track/TrackModal'

function Track() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="my-4">
        <SearchBar />
      </div>

      <div className="w-[50%] space-y-3 my-5 p-6 rounded-xl shadow-lg bg-[#1a1a1a]">
        <div className="flex justify-end">
          <Button text="Add Carps" onClick={() => setShowModal(true)} />
        </div>
        <Cwraps />
      </div>

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default Track;
