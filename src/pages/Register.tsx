import { useState } from 'react';
import { stethoscope } from '../assets';
import '../sass/pages/register.page.scss';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../config/firebase.config';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Register = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async (e: any) => {
        e.preventDefault();
        console.log('Register');

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        } else {

            try {
                const db = getFirestore(app);

                const auth = getAuth(app);

                // enviar correo de verificación
                emailjs.send('service_5jr8its', 'template_x93aoiv', {
                    email: email
                }, 'wp7BlILE1VjsWYsFE').then(async (result) => {

                    await addDoc(collection(db, 'usuarios'), {
                        nombre,
                        email,
                        usuario,
                        password,
                        date: new Date()
                    });

                    dispatch({
                        type: "SET_USER",
                        payload: auth.currentUser?.email
                    });

                    alert('Usuario registrado correctamente, bienvenido');

                    navigate('/');

                }).catch((error) => {
                    alert(error.message || 'Error');
                });

            } catch (error: any) {
                alert(error.message || 'Error');
            }
            
            setNombre('')
            setEmail('')
            setUsuario('')
            setPassword('')
        }

    }

    const handleRegisterGoogle = async (e: any) => {
        e.preventDefault();
        console.log('Register Google');

        const auth = getAuth(app);

        const provider = new GoogleAuthProvider();

        try {

            const userCredential = await signInWithPopup(auth, provider);

            const db = getFirestore(app);

            await addDoc(collection(db, 'usuarios'), {
                nombre: userCredential.user.displayName,
                email: userCredential.user.email,
                usuario: userCredential.user.displayName,
                password: '',
                date: new Date()
            });

            dispatch({
                type: "SET_USER",
                payload: userCredential.user.email
            });

            navigate('/');

        } catch (error: any) {

            alert(error.message || 'Error');

        }

    }

    return (
        <div className="register container">
            <img style={{ width: '50%' }} src={stethoscope} alt="logo" />
            <div className="register-content">
                <h1>Registrate</h1>
                <br />
                <form>
                    <div className="input-icon">
                        <i className="fas fa-user"></i>
                        <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre completo" />
                    </div>
                    <div className="input-icon">
                        <i className="fas fa-envelope"></i>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Correo electrónico" />
                    </div>
                    <div className="input-icon">
                        <i className="fas fa-user"></i>
                        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" placeholder="Usuario" />
                    </div>
                    <div className="grid-2">
                        <div className="input-icon">
                            <i className="fas fa-lock"></i>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Contraseña" />
                        </div>
                        <div className="input-icon">
                            <i className="fas fa-lock"></i>
                            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirmar Contraseña" />
                        </div>
                    </div>
                    <button onClick={handleRegister} className="btn">Registrarse</button>
                    <div className="divider">
                        <hr />
                        <span>o</span>
                        <hr />
                    </div>
                    <button onClick={handleRegisterGoogle}  className="btn">
                        <i className="fab fa-google"></i> Registrarse con Google
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Register;