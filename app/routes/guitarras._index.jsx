import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "~/models/guitarras.server";
import ListadoGuitarras from "~/components/listadoGuitarras";

export function meta() {
  return [
    { title: "Tienda de Guitarras" },
    { description: "GuitarLA - Nuestra collección de guitarras" },
  ];
}

export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

function Tienda() {
  const guitarras = useLoaderData();

  return <ListadoGuitarras guitarras={guitarras} />;
}

export default Tienda;
