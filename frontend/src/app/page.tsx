import { Blog } from "@/interfaces/Blog";
import { API } from "@/utils/Api";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { title } from "process";

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
    <>
      <Header
        props={{
          title: "Welcome to the Blog App",
          subtitle: "Discover the latest posts!",
        }}
      />

      <div className="grid grid-cols-2 gap-x-12 gap-y-8 my-16">
        {blogs ? (
          blogs.map((blog) => <Card key={blog.id} blog={blog} />)
        ) : (
          <h1>There are no blogs yet!</h1>
        )}
      </div>
    </>
  );
}
