import Link from "next/link";
import {MENU_ITEMS} from "@/app/_constants";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          {MENU_ITEMS &&
            MENU_ITEMS.map((item) => (
              <li key={item.path} className={styles.item}>
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
      <p className={styles.cr}>&copy; SIMPLE. All Rights Reserved 2025</p>
    </footer>
  );
}
