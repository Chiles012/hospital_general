import { Link } from "react-router-dom"

import "../sass/components/header.component.scss"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Header = () => {

    const dispatch = useDispatch();

    const { user } = useSelector((state: any) => state.user);

    const handleLogout = () => {

        dispatch({
            type: "SET_USER",
            payload: null
        });

    };

    useEffect(() => {
        console.log(user);
    }, [user])

    return (
        <header>
            <nav>
                <Link
                    to="/"
                >
                    <h1>Logo</h1>
                </Link>
                <ul>
                    {
                        !user ?
                        <>
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
                        </>
                        :
                        <li
                            onClick={handleLogout}
                        >
                            Cerrar sesión
                        </li>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Header;