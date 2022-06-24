import Link from "next/link";
import styles from "./header.module.css"
import config from "config";

export default function HeaderNav() {

  return (
    <header className="shadow-md dark:bg-zinc-800">
      <nav className="container mx-auto p-4 flex flex-row justify-between items-center">
        <Link href={{ pathname: "/" }}>{config.site.title}</Link>


        <Link href="/siwe">
          <a>Connect Wallet</a>
        </Link>

        </nav>
      </header>
  );
}
