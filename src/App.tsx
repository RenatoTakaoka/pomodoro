import "./styles/theme.css";
import "./styles/global.css";

import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContextProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";

export function App() {
  return (
    <ThemeContextProvider>
      <TaskContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-pomodoro" element={<AboutPomodoro />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TaskContextProvider>
    </ThemeContextProvider>
  );
}
