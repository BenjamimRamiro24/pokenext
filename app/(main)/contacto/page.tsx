import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactos",
};

export default function ContactoPage() {
  return (
    <section>
      <h1>Contactos</h1>
      <p>Esta página partilha o mesmo layout da Home (navegação e rodapé).</p>
    </section>
  );
}
