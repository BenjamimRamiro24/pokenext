import Link from "next/link";
import Image from "next/image";
import styles from "./../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      
      <div className={`${styles.divLogo} mx-auto`}>
        <Image src="/image/hope-logo.png" alt="HOPE Logo" width={50} height={50} />
        <span>HOPE - Hub for Operation, People and Equipment</span>
      </div>

      <ul className={styles.ulNavbar}>
        <li>
        <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contacto">Contactos</Link>
        </li>
        <li>
        <Link href="/servicos">Serviços</Link>
        </li>
        <li>
          <Link href="/login">Login (demo)</Link>
        </li>
      </ul>

    </nav>
  );
}