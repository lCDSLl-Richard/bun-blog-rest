import { client } from "../page";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const { data: blog } = await client.blogs[slug].get();

  if (!blog || blog === "Not Found") {
    return <h1>Blog not found!</h1>;
  } else {
    return (
      <main>
        <hgroup>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </hgroup>
      </main>
    );
  }
}
