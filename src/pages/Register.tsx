import { useState } from 'react';
import { stethoscope } from '../assets';
import '../sass/pages/register.page.scss';
import { addDoc, collection, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../config/firebase.config';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Register = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [curp, setCurp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Internacional, setInternacional] = useState(false);

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

                const queryUser = query(collection(db, 'usuarios'), where('curp', '==', curp));

                const querySnapshot = await getDocs(queryUser);

                if (!querySnapshot.empty) {
                    alert('El usuario ya existe');
                    return;
                }

                // enviar correo de verificación
                emailjs.send('service_5jr8its', 'template_x93aoiv', {
                    email: email
                }, 'wp7BlILE1VjsWYsFE').then(async (result) => {

                    await addDoc(collection(db, 'usuarios'), {
                        nombre,
                        email,
                        curp,
                        password,
                        date: new Date()
                    });

                    dispatch({
                        type: "SET_USER",
                        payload: email
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
            setCurp('')
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
                        <input type='checkbox' checked={Internacional} onChange={(e) => setInternacional(e.target.checked)} />
                        <label>¿Eres extranjero?</label>
                    </div>
                    <div className="input-icon">
                        <i className="fas fa-user"></i>
                        <input value={curp} onChange={(e) => setCurp(e.target.value)} type="text" placeholder={
                            Internacional ? 'No. Pasaporte' : 'CURP'
                        } />
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
                </form>
            </div>
        </div>
    )
}

export default Register;