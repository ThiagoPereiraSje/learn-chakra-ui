import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Chakra UI</h1>
      <Link href="/gradient">
        <a>Gradient</a>
      </Link>
    </div>
  );
}
