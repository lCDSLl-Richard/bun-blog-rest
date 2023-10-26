import Header from "@/components/Header";
import BlogForm from "./BlogForm";

export default function Page() {
  return (
    <>
      <Header
        title="Post a new Blog!"
        subtitle="Join the community with some content!"
      />
      <BlogForm />
    </>
  );
}
