import { stethoscope } from '../assets';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../config/firebase.config';
import '../sass/pages/login.page.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleLogin = async (e: any) => {
        e.preventDefault();
        console.log('Login');

        const db = getFirestore(app);

        try {
            const db = getFirestore(app);

            const docs = await getDocs(collection(db, 'usuarios'));

            const usuarios = docs.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            const usuario: any = usuarios.find((usuario: any) => usuario.email === email && usuario.password === password);

            if (!usuario) {
                alert('Credenciales incorrectas');
                return;
            }

            dispatch({
                type: "SET_USER",
                payload: usuario.email
            });

            navigate('/');

        } catch (error: any) {
            alert(error.message || 'Credenciales');
        }

    }

    const handleLoginGoogle = async (e: any) => {
        e.preventDefault();
        console.log('Login Google');
        const auth = getAuth(app);

        const provider = new GoogleAuthProvider();

        try {
            
            signInWithPopup(auth, provider).then((result) => {

                console.log(result.user);

                dispatch({
                    type: "SET_USER",
                    payload: result.user.email
                });

                navigate('/');

            }).catch((error) => {

                alert(error.message || 'Credenciales incorrectas');

            })
        } catch (error: any) {
            alert(error.message || 'Credenciales incorrectas');
        }

    }

    return (
        <div className="login container">
            <img style={{ width: '50%' }} src={stethoscope} alt="Estetoscopio" />
            <div className="login-content">
                <h1>Iniciar Sesión</h1>
                <br />
                <form>
                    <div className="input-icon">
                        <i className="fas fa-user"></i>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Usuario" />
                    </div>
                    <div className="input-icon">
                        <i className="fas fa-lock"></i>
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
                    </div>
                    <button onClick={handleLogin} className="btn">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );

}

export default Login;