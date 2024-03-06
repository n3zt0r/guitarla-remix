import imagen from "¬/img/nosotros.jpg";
import styles from "~/styles/nosotros.css";

export function meta() {
  return [
    { title: "GuitarLA - Nosotros" },
    { description: "Venta de guitarras, blog de música" },
  ];
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "preload",
      href: imagen,
      as: "image",
    },
  ];
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>
            Ullamcorper accumsan varius tellus convallis euismod hac tempus
            primis ac, fusce augue lectus massa est penatibus dignissim mauris,
            natoque gravida auctor parturient tincidunt facilisis sem suscipit.
            Etiam proin litora suscipit sociosqu curabitur mollis, posuere arcu
            volutpat eleifend dictumst suspendisse, porttitor iaculis tristique
            hendrerit consequat. Nascetur sodales vitae quisque egestas praesent
            nisi ultrices, ultricies eros aptent nam parturient viverra.
          </p>
          <p>
            Ullamcorper accumsan varius tellus convallis euismod hac tempus
            primis ac, fusce augue lectus massa est penatibus dignissim mauris,
            natoque gravida auctor parturient tincidunt facilisis sem suscipit.
            Etiam proin litora suscipit sociosqu curabitur mollis, posuere arcu
            volutpat eleifend dictumst suspendisse, porttitor iaculis tristique
            hendrerit consequat. Nascetur sodales vitae quisque egestas praesent
            nisi ultrices, ultricies eros aptent nam parturient viverra.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
