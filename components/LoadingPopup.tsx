"use client";

import styles from "../styles/loadingPopup.module.css";

export default function LoadingPopup() {
  return (
    <div
      className={styles.overlay}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="A carregar conteúdo"
    >
      <div className={styles.popup}>
        <div className={styles.spinner} aria-hidden="true" />
        <p className={styles.message}>á processar...</p>
      </div>
    </div>
  );
}
