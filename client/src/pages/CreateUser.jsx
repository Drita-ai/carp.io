import React, { useEffect, useState } from "react";
import { Input } from "@heroui/react";

const DELAY = 2;

function CreateUser() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsLoading(true)
    }, DELAY * 1000)

    return () => {
      clearTimeout(timer);
    };
  }, [])

  return (
    <div className='w-full h-[calc(100vh-10em)] flex flex-col justify-center items-center'>
      {isLoading ? <><div className="text-[#6e6e6e] text-2xl">
        <h1>Track Progress, Share Success.</h1>
      </div>
        <div className="mt-4">
          <Input label="@username" type="text" />
        </div></> : <Loading />}
    </div>
  );
}

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-white font-mono tracking-widest">
      <div className="relative text-3xl sm:text-4xl md:text-5xl font-bold">
        <span className="text-white animate-glitchColor">Loading</span>
        <span className="absolute top-0 left-0 text-pink-500 opacity-70 animate-glitch">
          Loading
        </span>
        <span className="absolute top-0 left-0 text-cyan-400 opacity-70 animate-glitch delay-75">
          Loading
        </span>
      </div>
      <p className="text-sm mt-4 text-gray-400 animate-pulse">Connecting to the carp-verse...</p>
    </div>
  );
}


export default CreateUser;
