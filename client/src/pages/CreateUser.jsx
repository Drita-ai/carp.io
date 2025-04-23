import React from "react";
import { Input } from "@heroui/react";

function CreateUser() {
  return (
    <div className='w-full h-[calc(100vh-10em)] flex flex-col justify-center items-center'>
      <div className="text-[#6e6e6e] text-2xl">
        <h1>Track Progress, Share Success.</h1>
      </div>
      <div className="mt-4">
        <Input label="@username" type="text" />
      </div>
    </div>
  );
}

export default CreateUser;
