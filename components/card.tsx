import Link from "next/link";
import styles from "./../styles/card.module.css";
import Image from 'next/image';


export default function Card({pokemon}: {pokemon: {id: number, name: string}}) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
       alt={pokemon.name} width={100} height={100} />
      

      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} className={styles.btn}>Detalhes</Link>





    </div>
  );
}  