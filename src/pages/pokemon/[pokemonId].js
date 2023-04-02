import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await res.json();

  const paths = data.results.map((pokemon) => {
    const id = pokemon.url.split("/")[6];
    return {
      params: { pokemonId: id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  if (id <= 0) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <div className="flex flex-col items-center">
      <Link className="btn" href="/">
        Voltar
      </Link>
      <h1 className="capitalize text-4xl my-2 font-semibold text-center bg-neutral-700 px-10 py-4 text-white">
        {pokemon.name}
      </h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={300}
        height={300}
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p className="text-center">#{pokemon.id}</p>
      </div>
      <div className="tipo flex items-center justify-center flex-col mb-4">
        <h3>Tipo:</h3>
        <div>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${"type"} ${"type_" + item.type.name}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="data-container flex items-center justify-center mt-1">
        <div className="flex border-r-2 items-center justify-center px-4 flex-col">
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className="flex items-center justify-center px-4 flex-col">
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
