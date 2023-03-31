import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }) {
  return (
    <div className="card">
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={300}
        height={300}
      />
      <p className="my-4 bg-red-500 rounded-md p-1 font-semibold flex justify-center items-center">
        #{pokemon.id}
      </p>
      <h3 className="title capitalize mb-4 font-semibold tracking-widest text-2xl">
        {pokemon?.name}
      </h3>
      <Link className="btn " href={`/pokemon/${pokemon.id}`}>
        Detalhes
      </Link>
    </div>
  );
}
