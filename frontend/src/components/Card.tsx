import Avatar from "@/assets/svgs/Avatar";
import RArrow from "@/assets/svgs/RArrow";
import { Blog } from "@/interfaces/Blog";
import Link from "next/link";

export default function Card({ blog }: { blog: Blog }) {
  return (
    <article className="w-full h-64 flex flex-col rounded-lg bg-cardBg border border-textColor p-8 shadow-lg">
      <header className="flex flex-row justify-between h-3/4 text-ellipsis overflow-hidden">
        <h1 className="text-4xl font-semibold w-3/5">{blog.title}</h1>
        <hgroup className="flex flex-row items-center justify-start self-start">
          <Avatar width="50" height="50" />
          <span>Ricardo Fernandez</span>
        </hgroup>
      </header>
      <main className="flex flex-col h-full">
        <p className="text-xl">{blog.content}</p>
        <Link
          href={`/${blog.slug}`}
          className="text-primary mt-auto fill-primary"
        >
          <span className="flex flex-row justify-end items-center">
            <p>Read more</p>
            <RArrow width="24" height="24" />
          </span>
        </Link>
      </main>
    </article>
  );
}
