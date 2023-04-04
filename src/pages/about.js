import Image from "next/image";
import charizard from "../images/charizard.png";
export default function About() {
  return (
    <div className=" flex  flex-col items-center">
      <h1 className="text-3xl font-semibold mb-3">Sobre o projeto</h1>
      <p>PokeNext é um App contruído em NextJs para consultar Pokémons.</p>
      <Image
        className="mt-5"
        alt="charizard"
        src={charizard}
        width={300}
        height={300}
      />
    </div>
  );
}
