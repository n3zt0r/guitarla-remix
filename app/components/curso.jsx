import { BlocksRenderer } from "@strapi/blocks-react-renderer";

function Curso({ curso }) {
  const { titulo, imagen, contenido } = curso;
  const { url: imageUrl } = imagen.data.attributes;

  return (
    <section className="curso">
      <style jsx="true">
        {`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${imageUrl});
          }
        `}
      </style>
      <div className="contenedor curso-grid">
        <div className="contenido">
          <h2 className="heading">{titulo}</h2>
          <div className="texto">
            <BlocksRenderer className="texto" content={contenido} />
          </div>
        </div>
      </div>
    </section>
  );
}

Curso.propTypes = String;

export default Curso;
