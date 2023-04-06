import { FC } from "react";

const Card:FC<{ especialidad: any }> = ({ especialidad }) => {
    return (
        <div className="card">
            <h2>
                {especialidad.nombre}
            </h2>
            <p>
                {especialidad.descripcion}
            </p>
            <button className="btn">Postularme</button>
        </div>
    );
}

export default Card;