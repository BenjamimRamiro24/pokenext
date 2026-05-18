import styles from "./../../styles/home.module.css";
import type { Metadata } from "next";
import Image from "next/image";

import Card from "../../components/card"; // importando o componente Card

export const metadata: Metadata = {
  title: "Home",
};

type PokeApiResult = {
  name: string;
  url: string;
};

type PokeApiListResponse = {
  results: PokeApiResult[];
};

function idFromPokemonUrl(url: string): number {
  const parts = url.split("/").filter(Boolean);
  const last = parts.at(-1);
  const n = last ? Number(last) : NaN;
  return Number.isFinite(n) ? n : 0;
}

export default async function Home() {
  const limit = 20;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Não foi possível carregar a lista de Pokémon.");
  }
  const data: PokeApiListResponse = await res.json();

  const pokemons = data.results.map((item) => ({
    id: idFromPokemonUrl(item.url),
    name: item.name,
  }));

  return (
    <div className={styles.divHome}>

      <div className={styles.title_container}>

        <h1 className={styles.title}>Poke<a className={styles.aNext}>Next</a></h1>
        <Image src="/image/hope-logo.png" alt="HOPE Logo" width={50} height={50} />

      </div>

      <div className={styles.pokemon_cotainer}>
        {pokemons.map((pokemon) => (

          <Card key={pokemon.id} pokemon={pokemon} />

        ))}
      </div>


      <p className={styles.leadList}>
          Lista a partir de{" "}
          <a
            href="https://pokeapi.co/api/v2/pokemon"
            target="_blank"
            rel="noreferrer"
          >
            PokeAPI
          </a>
          .
        </p>

    </div>
  );
}
