import { Link } from "react-router-dom"

import "../sass/components/header.component.scss"

const Header = () => {
    return (
        <header>
            <nav>
                <Link
                    to="/"
                >
                    <h1>Logo</h1>
                </Link>
                <ul>
                    <li>
                        <Link
                            to="/login"
                        >
                            Inicio de sesión
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register"
                        >
                            Registro
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;