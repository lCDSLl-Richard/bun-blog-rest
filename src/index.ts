import { swagger } from "@elysiajs/swagger";
import { logger } from "@grotto/logysia";
import { Elysia } from "elysia";
import { blogsApp } from "./routes/blogs";

const app = new Elysia()
  .use(swagger())
  .use(logger())
  .get("/", () => "Hello Elysia")
  .group("/blogs", (app) => app.use(blogsApp))
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
