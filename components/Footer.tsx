import styles from "./../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.divFooter}>
            <p className={styles.pFooter}>© 2026 PokeNext. All rights reserved.</p>
        </div>
    </footer>
  );
}