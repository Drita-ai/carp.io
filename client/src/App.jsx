import { Input } from "@heroui/react";
import "./App.css";

function App() {
  return (
    <>
      <div className="text-[#6e6e6e] text-2xl ">
        <h1>Track Progress, Share Success.</h1>
      </div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 bg-red">
        <Input label="@username" type="text" />
      </div>
    </>
  );
}

export default App;
