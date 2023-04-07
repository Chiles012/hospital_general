import { stethoscope } from '../assets';
import '../sass/pages/register.page.scss';

const Register = () => {
    return (
        <div className="register container">
            <img style={{ width: '50%' }} src={stethoscope} alt="logo" />
            <div className="register-content">
                <h1>Registrate</h1>
                <br />
                <form>
                    <div className="input-icon">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Nombre completo" />
                    </div>
                    <div className="input-icon">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Correo electrónico" />
                    </div>
                    <div className="input-icon">
                        <i className="fas fa-user"></i>
                        <input type="text" placeholder="Usuario" />
                    </div>
                    <div className="grid-2">
                        <div className="input-icon">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Contraseña" />
                            <i className='fas fa-eye rigth'></i>
                        </div>
                        <div className="input-icon">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Confirmar Contraseña" />
                            <i className='fas fa-eye rigth'></i>
                        </div>
                    </div>
                    <button className="btn">Registrarse</button>
                    <div className="divider">
                        <hr />
                        <span>o</span>
                        <hr />
                    </div>
                    <button className="btn">
                        <i className="fab fa-google"></i> Registrarse con Google
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;