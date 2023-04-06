import { stethoscope } from '../assets';
import '../sass/pages/login.page.scss'

const Login = () => {

    return (
        <div className="login container">
            <img style={{ width: '80%' }} src={stethoscope} alt="Estetoscopio" />
            <div className="login-content">
                <h1>Iniciar Sesión</h1>
                <form>
                    <div className="input-icon">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Usuario" />
                    </div>
                    <div className="input-icon">
                        <i className="fas fa-lock"></i>
                        <input type="password" placeholder="Contraseña" />
                    </div>
                    <button className="btn">Iniciar Sesión</button>
                    <div className="divider">
                        <hr />
                        <span>o</span>
                        <hr />
                    </div>
                    <button className="btn">
                        <i className="fab fa-google"></i> Iniciar Sesión con Google
                    </button>
                    <button className="btn">
                        <i className="fab fa-facebook"></i> Iniciar Sesión con Facebook
                    </button>
                </form>
            </div>
        </div>
    );

}

export default Login;