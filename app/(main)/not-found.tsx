import type { Metadata } from "next";
import NotFoundContent from "../../components/NotFoundContent";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return <NotFoundContent />;
}
