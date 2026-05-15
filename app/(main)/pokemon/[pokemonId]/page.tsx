import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../../../styles/SinglePokemon.module.css";

type PageProps = {
  params: Promise<{ pokemonId: string }>;
};

type FlavorTextEntry = {
  flavor_text: string;
  language: { name: string };
};

type PokemonSpeciesResponse = {
  flavor_text_entries: FlavorTextEntry[];
};

type PokemonTypeSlot = {
  type: { name: string };
};

type PokemonResponse = {
  id: number;
  name: string;
  types: PokemonTypeSlot[];
  height: number;
  weight: number;
};

function formatName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function getDescription(species: PokemonSpeciesResponse): string {
  const entries = species.flavor_text_entries;
  const pt = entries.find(
    (e) => e.language.name === "pt" || e.language.name === "pt-BR"
  );
  const en = entries.find((e) => e.language.name === "en");
  const text = (pt ?? en)?.flavor_text;

  if (!text) {
    return "Descrição não disponível para este Pokémon.";
  }

  return text
    .replace(/\f/g, " ")
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default async function PokemonPage({ params }: PageProps) {
  const { pokemonId } = await params;
  const id = Number(pokemonId);

  if (!Number.isInteger(id) || id < 1) {
    notFound();
  }

  const [pokemonRes, speciesRes] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      next: { revalidate: 3600 },
    }),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`, {
      next: { revalidate: 3600 },
    }),
  ]);

  if (!pokemonRes.ok || !speciesRes.ok) {
    notFound();
  }

  const pokemon = (await pokemonRes.json()) as PokemonResponse;
  const species = (await speciesRes.json()) as PokemonSpeciesResponse;

  const name = formatName(pokemon.name);
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const description = getDescription(species);

  return (
    <div className={styles.PokemonDetail}>
      <div className={styles.cardPokemonDetail}>
        <div className={styles.cardPokemonDetailContent}>

          <Image className={styles.imagePokemonDetail} src={image} alt={name} width={200} height={200} />
          <h1 className={styles.titlePokemonDetail}>{name}</h1>

          <h3>Número:</h3>
          <p className={styles.idPokemonDetail}>{id}</p>


          <h3>Tipo:</h3>
          <p>{pokemon.types.map((item, index) => (
            <span key={index} 
            className={`${styles.type} ${styles[`type_${item.type.name}`]}`}
            >
              {item.type.name}</span>
          ))}</p>


          <h3>Atura:</h3>
          <p>{pokemon.height * 10} cm</p>

          <h3>Peso:</h3>
          <p>{pokemon.weight / 10} kg</p>

          <h3>Descrição:</h3>
          <p className={styles.descriptionPokemonDetail}>
            {description}
          </p>

          <Link href="/" className={styles.btn}>
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
