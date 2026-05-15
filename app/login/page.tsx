"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import styles from "./login.module.css";

export default function LoginDemoPage() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Demo: qualquer credencial aceite. A redirecionar…");
    setTimeout(() => router.push("/"), 600);
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <span className={styles.badge}>Demonstração</span>
        <h1 className={styles.title}>Entrar</h1>
        <p className={styles.subtitle}>
          Página de login fictícia — não usa o layout da aplicação (sem barra
          nem rodapé).
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="username"
              className={styles.input}
              placeholder="demo@hope.local"
            />
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="password">
              Palavra-passe
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className={styles.input}
              placeholder="••••••••"
            />
          </div>
          {message ? (
            <p className={styles.subtitle} style={{ marginBottom: 0 }}>
              {message}
            </p>
          ) : null}
          <div className={styles.actions}>
            <button type="submit" className={styles.primary}>
              Entrar (demo)
            </button>
            <p className={styles.linkHome}>
              <Link href="/">Ir para a Home sem login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
