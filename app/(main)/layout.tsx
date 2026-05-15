import styles from "../../styles/maincontainer.module.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MainShellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className={styles.Layout}>{children}</main>
      <Footer />
    </>
  );
}
