import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center bg-background-og px-12 py-4">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold">
          <Link href={"/"}>Mamablog.</Link>
        </h2>
      </div>
      <ul className="decoration-none flex flex-row justify-between items-center gap-4">
        <li className="text-lg">
          <Link href={"/articles"}>articles</Link>
        </li>
      </ul>
    </nav>
  );
};
