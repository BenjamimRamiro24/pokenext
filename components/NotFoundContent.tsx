import Link from "next/link";
import styles from "../styles/notFound.module.css";

export default function NotFoundContent() {
  return (
    <div className={styles.container}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>
        Página <span className={styles.titleAccent}>não encontrada</span>
      </h1>
      <p className={styles.description}>
        A página que procuras não existe ou foi movida. Volta à lista de
        Pokémon e tenta outra vez.
      </p>
      <Link href="/" className={styles.btn}>
        Voltar à Home
      </Link>
    </div>
  );
}
