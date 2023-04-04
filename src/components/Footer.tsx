import { Link } from 'react-router-dom';
import '../sass/components/footer.component.scss';

const Footer = () => {

    return (
        <footer>
            <h1>
                Logo
            </h1>
            <div className="footer-content">
                <nav>
                    <h3>
                        Navegación
                    </h3>
                    <ul>
                        <li>
                            <Link to="/inicio">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/terminos-condicionex">Terminos y condiciones</Link>
                        </li>
                        <li>
                            <Link to="/acerca">Acerca</Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h3>
                        Redes sociales
                    </h3>
                    <ul>
                        <li>
                            <Link to="/facebook">Facebook</Link>
                        </li>
                        <li>
                            <Link to="/twitter">Twitter</Link>
                        </li>
                        <li>
                            <Link to="/instagram">Instagram</Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <h3>
                        Contacto
                    </h3>
                    <ul>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                        <li>
                            <Link to="/soporte">Soporte</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <p>
                &copy; 2023 - Todos los derechos reservados
            </p>
        </footer>
    );

};

export default Footer;