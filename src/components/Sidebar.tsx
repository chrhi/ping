import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { PublicThreads } from "./ThreadList";

const Links = () => {
  return (
    <div className="h-fit w-fit flex-row flex-wrap gap-2 overflow-auto text-sm text-base-content flex">
      <Link className="hover:underline" href={"/policy"}>
        Privacy Policy
      </Link>
      <Link className="hover:underline" href={"/conditions"}>
        Terms of Service
      </Link>
      <Link className="hover:underline" href={"/about"}>
        About
      </Link>
      <a href="https://kualta.dev/" className="select-none">
        © 2023 K.U Corp.
      </a>
    </div>
  );
};

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-6 py-4 sm:px-2">
      <SearchBar defaultText="" />
      <PublicThreads />
      <Links />
    </div>
  );
}
