import "tailwindcss/tailwind.css";
import Link from "next/link";

export default function Home() {
  return (
    <h1 className="font-300">
      Read{" "}
      <Link href="/posts/first-post">
        <a>this page!</a>
      </Link>
    </h1>
  );
}
