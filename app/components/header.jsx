import { Link } from "@remix-run/react";
import logo from "¬/img/logo.svg";
import Navegacion from "~/components/navegacion";

function Header() {
  return (
    <header className="header">
      <div className="contenedor barra">
        <Link to="/">
          <img className="logo" src={logo} alt="Imagen del logo" />
        </Link>
        <Navegacion />
      </div>
    </header>
  );
}

export default Header;
