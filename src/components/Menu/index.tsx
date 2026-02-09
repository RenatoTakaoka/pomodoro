import styles from "./styles.module.css";
import { History, House, Moon, Settings, Sun } from "lucide-react";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";
import { Link } from "react-router";

export function Menu() {
  const { theme, setTheme } = useThemeContext();

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to="/"
        aria-label="Home"
        title="Ir para a Home"
      >
        <House />
      </Link>
      <Link
        className={styles.menuLink}
        to="/history"
        aria-label="Histórico"
        title="Ir para o Histórico"
      >
        <History />
      </Link>
      <Link
        className={styles.menuLink}
        to="/settings"
        aria-label="Configurações"
        title="Ir para as Configurações"
      >
        <Settings />
      </Link>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Tema"
        title="Alterar tema"
        onClick={e => {
          e.preventDefault();
          handleChangeTheme();
        }}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </a>
    </nav>
  );
}
