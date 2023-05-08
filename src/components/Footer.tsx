import { Link } from 'react-router-dom';
import '../sass/components/footer.component.scss';

const Footer = () => {

    return (
        <footer>
            <div className="footer-content">
                <nav>
                    <h3>
                        Contacto
                    </h3>
                    <ul>
                        <li>
                            Telefono: 4772672000 ext 1711
                        </li>  
                        <li>
                            Correo: areaensenanza.hraeb@gmail.com
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