import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  return (
    <nav className="nav">
      <div className="flex items-center gap-8 mx-6">
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="pokeball"
        />
        <h1 className="font-bold text-2xl ">PokeNext</h1>
      </div>
      <ul className="flex items-center gap-8 mx-6">
        <li className="nav_link">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="nav_link">
          <Link href={"/about"}>Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
