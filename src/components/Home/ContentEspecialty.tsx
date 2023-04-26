import { FC } from "react";
import Card from "../Card";

const ContentEspecialty: FC<{especialidades: any}> = ({especialidades}) => {

    return (
        <div className="content-especialty">
            {
                especialidades.length === 0 ?
                <h1
                    style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        color: '#5b70f4'
                    }}
                >
                    No hay usuarios registrados
                </h1>
                :
                especialidades.map((especialidad: any) => {
                    return (
                        <Card
                            key={especialidad.id}
                            especialidad={especialidad}
                        />
                    );
                })
            }
        </div>
    );
}

export default ContentEspecialty;