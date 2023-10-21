import Link from "next/link";

interface Blog {
  title: string;
  content: string;
  slug: string;
}

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
