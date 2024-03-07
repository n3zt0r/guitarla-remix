import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";

function Post({ post }) {
  const { titulo, contenido, url, imagen, publishedAt } = post;
  const { url: imageUrl } = imagen.data.attributes.formats.small;

  return (
    <article className="post">
      <img className="imagen" src={imageUrl} alt={`Imagen blog ${titulo}`} />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="resumen">{contenido[0].children[0].text}</p>
        <Link className="enlace" to={`/posts/${url}`}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}

Post.propTypes;

export default Post;
