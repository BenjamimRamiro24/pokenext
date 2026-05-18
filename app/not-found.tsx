import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFoundContent from "../components/NotFoundContent";
import layoutStyles from "../styles/maincontainer.module.css";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function GlobalNotFound() {
  return (
    <>
      <Navbar />
      <main className={layoutStyles.Layout}>
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
