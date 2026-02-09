import { Flip, ToastContainer } from "react-toastify";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";
import { Home } from "../../pages/Home";

export function AppContent() {
  const { theme } = useThemeContext();

  return (
    <>
      <Home />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme={theme === "light" ? "dark" : "light"}
        transition={Flip}
      />
    </>
  );
}