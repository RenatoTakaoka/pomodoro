import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a>Entenda como funciona a tecnica pomodoro</a>
      <p>© Chronos &copy; {new Date().getFullYear()}</p>
      <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
}
