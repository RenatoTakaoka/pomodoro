import "./styles/theme.css";
import "./styles/global.css";

import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContextProvider";
import { AppContent } from "./components/AppContent";

export function App() {
  return (
    <ThemeContextProvider>
      <TaskContextProvider>
        <AppContent />
      </TaskContextProvider>
    </ThemeContextProvider>
  );
}
