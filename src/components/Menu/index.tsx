import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { History, House, Moon, Settings, Sun } from "lucide-react";

type Themes = "light" | "dark";

export function Menu() {
  const [theme, setTheme] = useState<Themes>(() => {
    const storedTheme = localStorage.getItem("theme");
    return (storedTheme === "light" || storedTheme === "dark") ? storedTheme : "light";
  });

  function handleChangeTheme(newTheme: Themes) {
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Home"
        title="Ir para a Home"
      >
        <House />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Histórico"
        title="Ir para o Histórico"
      >
        <History />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Ir para as Configurações"
      >
        <Settings />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Tema"
        title="Alterar tema"
        onClick={e => {
          e.preventDefault();
          handleChangeTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {theme === "light" ? <Sun /> : <Moon />}
      </a>
    </nav>
  );
}
