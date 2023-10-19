export interface Blog {
  id: number;
  title: string;
  content: string;
  slug: string;
}

export const blogs: Blog[] = [
  { id: 1, title: "My Title", content: "My Amazing Content", slug: "my-title" },
  {
    id: 2,
    title: "My Second Title",
    content: "Even more content",
    slug: "my-second-title",
  },
];
