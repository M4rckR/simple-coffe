import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CoffeeProvider } from "./context/CoffeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CoffeeProvider>
      <App />
    </CoffeeProvider>
  </StrictMode>
);
