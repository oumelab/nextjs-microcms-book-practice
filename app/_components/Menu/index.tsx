"use client";

import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";
import styles from "./index.module.css";
import {MENU_ITEMS} from "@/app/_constants";

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav className={cx(styles.nav, isOpen && styles.open)}>
        <ul className={styles.items}>
          {MENU_ITEMS.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <button onClick={close} className={styles.item_button}>{item.label}</button>
              </Link>
            </li>
          ))}
        </ul>
        <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button>
      </nav>
      <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} priority />
      </button>
    </div>
  );
}
