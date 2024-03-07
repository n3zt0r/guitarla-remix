import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";
import styles from "~/styles/guitarras.css";

export async function loader({ params }) {
  const guitarraUrl = params["*"];
  const guitarra = await getGuitarra(guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }

  return guitarra;
}

export function meta({ data }) {
  return [
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    {
      description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`,
    },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

function Guitarra() {
  const guitarra = useLoaderData();
  const { nombre, descripcion, precio, imagen } = guitarra.data[0].attributes;
  const { url: imageUrl } = imagen.data.attributes;
  const { text: textDescription } = descripcion[0].children[0];

  return (
    <main className="contenedor guitarra">
      <img
        className="imagen"
        src={imageUrl}
        alt={`Imagen de la guitarra ${nombre}`}
      />

      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{textDescription}</p>
        <p className="precio">{precio}</p>
      </div>
    </main>
  );
}

export default Guitarra;
