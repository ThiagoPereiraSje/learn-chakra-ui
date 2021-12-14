import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Chakra UI</h1>
      <Link href="/gradient">
        <a>Gradient</a>
      </Link>{" "}
      <br />
      <Link href="/aspectratio">
        <a>Aspect Ratio</a>
      </Link>{" "}
      <br />
      <Link href="/box">
        <a>Box</a>
      </Link>{" "}
      <br />
      <Link href="/center">
        <a>Center</a>
      </Link>
    </div>
  );
}
