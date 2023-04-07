import { FC } from "react";
import { Link } from "react-router-dom";

const Card:FC<{ especialidad: any }> = ({ especialidad }) => {
    return (
        <div className="card">
            <h2>
                {especialidad.nombre}
            </h2>
            <p>
                {especialidad.descripcion}
            </p>
            <Link to={`/specialty/${especialidad.id}`}>
                <button className="btn">Postularme</button>
            </Link>
        </div>
    );
}

export default Card;