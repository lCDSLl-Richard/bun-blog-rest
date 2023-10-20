import Link from "next/link";

export default function () {
  return (
    <nav>
      <ul>
        <li>
          <strong>BlogApp</strong>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/new">New</Link>
        </li>
      </ul>
    </nav>
  );
}
