import Image from "next/image";
import Card from "../components/Card.js";
import { useState } from "react";
export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  //add pokemon index

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export default function Home({ pokemons }) {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="flex flex-col items-center">
      <input
        className="border fixed right-0 top-16 lg:top-20 md:top-20 w-full lg:w-auto md:w-auto p-2 focus:border-red-500"
        type="text"
        placeholder="Search Pokemon"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />

      <div className="flex justify-center items-center mb-8">
        <h1 className="text-5xl text-red-500 font-bold mr-2">
          Poke<span className="text-neutral-700">Next</span>
        </h1>
        <Image
          src={"/images/pokeball.png"}
          width={50}
          height={50}
          alt="PokeNext"
        />
      </div>

      <div className="pokemon-container">
        {pokemons
          .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchItem.toLowerCase())
          )
          .map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>
    </div>
  );
}
