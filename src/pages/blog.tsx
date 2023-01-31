import "../app/global.css";
import { IoMdConstruct } from "react-icons/io";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-primary-light text-text-dark text-3xl flex justify-center items-center h-[100vh] flex-col">
      <h2 className="flex">
        <IoMdConstruct />
        Under construction
      </h2>
      <button
        onClick={() => history.back()}
        className="bg-primary-dark text-white px-3 py-2 inline-block rounded-sm hover:brightness-95"
      >
        Go back
      </button>
    </main>
  );
}
