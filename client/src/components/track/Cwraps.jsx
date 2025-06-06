import React, { useState } from "react";
import { Card, CardBody } from "@heroui/react";

function Cwraps() {
  const initialTasks = {
    task1: "Complete something within 2 days",
    task2: "Complete something today and make up my mind for next",
    task3: "Gotta do it, if I want to!!",
  };

  const [completedTasks, setCompletedTasks] = useState({});

  const toggleTask = (key) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <>
      {Object.entries(initialTasks).map(([key, value]) => (
        <div key={key} className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={completedTasks[key] || false}
            onChange={() => toggleTask(key)}
            className="w-5 h-5 rounded-full border-1 border-white bg-transparent checked:bg-green-500 checked:border-green-500 appearance-none cursor-pointer transition-all duration-200"
          />

          <Card className="flex-1">
            <CardBody>
              <p
                className={`text-black ${
                  completedTasks[key] ? "line-through opacity-60" : ""
                }`}
              >
                {value}
              </p>
            </CardBody>
          </Card>
        </div>
      ))}
    </>
  );
}

export default Cwraps;
