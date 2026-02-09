import { Link } from "react-router";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/about-pomodoro">Entenda como funciona a tecnica pomodoro</Link>
      <Link to="/">© Chronos &copy; {new Date().getFullYear()}</Link>
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
}
