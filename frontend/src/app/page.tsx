import { Blog } from "@/interfaces/Blog";
import { API } from "@/utils/Api";
import Card from "../../components/Card";

export default async function Home() {
  let blogs: Blog[] = [];

  try {
    const res = await fetch(API.blogs.index(), { cache: "no-cache" });
    blogs = (await res.json()) as Blog[];
  } catch (error) {
    console.error(error);
    blogs = [];
  }

  return (
    <main>
      <hgroup>
        <h1>Discover Blogs!</h1>
        <h2>You can see each blog below</h2>
      </hgroup>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: "1rem",
        }}
      >
        {blogs ? (
          blogs.map((blog) => <Card key={blog.id} blog={blog} />)
        ) : (
          <h1>There are no blogs yet!</h1>
        )}
      </div>
    </main>
  );
}
