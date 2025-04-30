import { url } from "inspector";
import Link from "next/link";

export const Footer = () => {
  const links = [
    {
      name: "Github",
      url: "https://github.com/MahendraDani",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mahendra-dani/",
    },
    {
      name: "Blog",
      url: "https://blog.mahendradani.vercel.app",
    },
  ];
  return (
    <nav className="flex flex-row justify-between items-center bg-background-og px-12 py-4">
      <div className="flex flex-col justify-start items-start">
        <h2 className="text-xl sm:text-2xl font-bold">
          <Link href={"/"}>Mamablog.</Link>
        </h2>
        <p>
          {"Developed by "}
          <Link href={"https://mahendradani.vercel.app"}>Mahendra Dani</Link>
        </p>
      </div>
      <ul className="decoration-none flex text-sm sm:flex-row flex-col justify-between items-center gap-1 sm:gap-4">
        {links.map((link, idx) => (
          <li key={idx} className="text-sm">
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
