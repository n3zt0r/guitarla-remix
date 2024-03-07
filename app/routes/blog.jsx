import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server";
import ListadoPosts from "~/components/listadoPosts";
import styles from "~/styles/blog.css";

export function meta() {
  return [
    { title: `GuitarLA - Nuestro blog` },
    {
      description: `GuitarLA, Blog de música y venta de guitarras`,
    },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export async function loader() {
  const posts = await getPosts();
  return posts.data;
}

function Blog() {
  const posts = useLoaderData();

  return (
    <main className="contenedor">
      <ListadoPosts posts={posts} />
    </main>
  );
}

export default Blog;
