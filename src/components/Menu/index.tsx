import styles from "./styles.module.css";
import { History, House, Moon, Settings, Sun } from "lucide-react";
import { useThemeContext } from "../../contexts/ThemeContext/useThemeContext";
import { RouterLink } from "../RouterLink";

export function Menu() {
  const { theme, setTheme } = useThemeContext();

  function handleChangeTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label="Home"
        title="Ir para a Home"
      >
        <House />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/history"
        aria-label="Histórico"
        title="Ir para o Histórico"
      >
        <History />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/settings"
        aria-label="Configurações"
        title="Ir para as Configurações"
      >
        <Settings />
      </RouterLink>
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
