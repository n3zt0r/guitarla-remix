import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from "~/utils/helpers";

export async function loader({ params }) {
  const postUrl = params["postUrl"];
  const post = await getPost(postUrl);
  console.log(post);

  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Entrada no encontrado",
    });
  }

  return post;
}

export function meta({ data }) {
  return [
    { title: `GuitarLA - ${data.data[0].attributes.titulo}` },
    {
      description: `Guitarras, venta de guitarras, entrada ${data.data[0].attributes.nombre}`,
    },
  ];
}

function Post() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt } = post.data[0].attributes;
  const { url: imageUrl } = imagen.data.attributes;

  return (
    <article className="post mt-3">
      <img className="imagen" src={imageUrl} alt={`Imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <div className="texto">
          <BlocksRenderer content={contenido} />
        </div>
      </div>
    </article>
  );
}

export default Post;
