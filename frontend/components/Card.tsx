import Link from "next/link";

interface Blog {
  title: string;
  content: string;
  slug: string;
}

export default function Card({ blog }: { blog: Blog }) {
  return (
    <Link href={`/${blog.slug}`}>
      <article>
        <hgroup>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </hgroup>
      </article>
    </Link>
  );
}
