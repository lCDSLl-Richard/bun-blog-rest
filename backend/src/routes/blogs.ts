import { PrismaClient } from "@prisma/client";
import { Elysia, t } from "elysia";

const db = new PrismaClient();

const blogBody = t.Object({
  title: t.String(),
  content: t.String(),
});

export const blogsApp = new Elysia()
  .get("/", async () => await db.blog.findMany())
  .get("/:slug", async ({ params, set }) => {
    const blog = await db.blog.findFirst({ where: { slug: params.slug } });
    if (!blog) {
      set.status = 404;
      return { message: "Not Found" };
    }
    return blog;
  })
  .post(
    "/",
    async ({ body, set }) => {
      try {
        if (!body.title || !body.content) {
          throw new Error("Title and content are required");
        }

        await db.blog.create({
          data: {
            ...body,
            slug: body.title.toLowerCase().split(" ").join("-"),
          },
        });
      } catch (error) {
        set.status = 400;
        return { message: `Error: ${error}` };
      }
    },
    {
      body: blogBody,
    }
  )
  .delete("/:slug", async ({ params, set }) => {
    try {
      return await db.blog.delete({ where: { slug: params.slug } });
    } catch {
      set.status = 404;
      return { message: "Not Found" };
    }
  });
