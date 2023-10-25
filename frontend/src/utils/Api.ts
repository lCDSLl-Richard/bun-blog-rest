export class API {
  private static base = "http://localhost:3000";
  static blogs = {
    index: () => `${API.base}/blogs`,
    show: (slug: string) => `${API.base}/blogs/${slug}`,
    create: () => `${API.base}/blogs`,
  };
}
