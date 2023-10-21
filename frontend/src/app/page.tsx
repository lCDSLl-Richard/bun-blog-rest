import { edenTreaty } from "@elysiajs/eden/treaty";
import { App } from "../../../backend/src/index";
import Card from "../../components/Card";

export const client = edenTreaty<App>("http://localhost:3000/");

export default async function Home() {
  const { data: blogs } = await client.blogs[""].get({
    $fetch: { cache: "no-cache" },
  });

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
