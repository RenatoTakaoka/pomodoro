import "./styles/theme.css";
import "./styles/global.css";

import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContextProvider";
import { MainRouter } from "./routes/MainRouter";

export function App() {
  return (
    <ThemeContextProvider>
      <TaskContextProvider>
        <MainRouter />
      </TaskContextProvider>
    </ThemeContextProvider>
  );
}
