import { Blog } from "@/interfaces/Blog";
import { API } from "@/utils/Api";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let blog: Blog | undefined;

  try {
    const res = await fetch(API.blogs.show(slug));
    blog = (await res.json()) as Blog;
  } catch (error) {
    console.error(error);
  }

  if (!blog) {
    return (
      <>
        <hgroup>
          <h1>Blog not found!</h1>
          <p>You can try to find another blog.</p>
        </hgroup>
      </>
    );
  } else {
    return (
      <>
        <hgroup>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </hgroup>
      </>
    );
  }
}
