import avatar from "@/assets/avatar.svg";
import rArrow from "@/assets/rArrow.svg";
import { Blog } from "@/interfaces/Blog";
import Image from "next/image";
import Link from "next/link";

export default function Card({ blog }: { blog: Blog }) {
  return (
    <article className="w-full h-64 flex flex-col rounded-lg bg-cardBg border-2 border-textColor p-8">
      <header className="flex flex-row justify-between h-3/4 text-ellipsis overflow-hidden">
        <h1 className="text-4xl font-semibold w-3/5">{blog.title}</h1>
        <hgroup className="flex flex-row items-center justify-start self-start">
          <Image
            src={avatar}
            alt="avatar"
            width="50"
            height="50"
            className="mr-2"
          />
          <span>Ricardo Fernandez</span>
        </hgroup>
      </header>
      <main className="flex flex-col h-full">
        <p className="text-xl">{blog.content}</p>
        <Link href={`/${blog.slug}`} className="text-primary mt-auto">
          <span className="flex flex-row justify-end items-center">
            <p>Read more</p>
            <Image src={rArrow} alt="Right Arrow" width={24} height={24} />
          </span>
        </Link>
      </main>
    </article>
  );
}
