import { createRoot } from "react-dom/client";
import "./output.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";

createRoot(document.getElementById("root")).render(
  <HeroUIProvider>
    <App />
  </HeroUIProvider>
);
