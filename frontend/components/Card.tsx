import { Blog } from "@/interfaces/Blog";
import Link from "next/link";

export default function Card({ blog }: { blog: Blog }) {
  return (
    <article>
      <Link href={`/${blog.slug}`}>
        <hgroup>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </hgroup>
      </Link>
    </article>
  );
}
