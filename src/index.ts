import { Elysia, t } from "elysia";
import { blogs } from "./Blog";

const blogBody = t.Object({
  id: t.Numeric(),
  title: t.String(),
  content: t.String(),
  slug: t.String(),
});

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .group("/blogs", (app) =>
    app
      .get("/", () => blogs)
      .get("/:slug", ({ params, set }) => {
        const blog = blogs.find((blog) => blog.slug === params.slug);
        if (!blog) {
          set.status = 404;
          return "Not Found";
        }
        return blog;
      })
      .post(
        "/",
        ({ body }) => {
          blogs.push(body);
          return body;
        },
        {
          body: blogBody,
        }
      )
      .delete("/:slug", ({ params, set }) => {
        const index = blogs.findIndex((blog) => blog.slug === params.slug);
        if (index === -1) {
          set.status = 404;
          return "Not Found";
        }
        blogs.splice(index, 1);
        return "Deleted";
      })
  )
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
