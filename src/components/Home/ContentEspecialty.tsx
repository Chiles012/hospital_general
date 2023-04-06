import Card from "../Card";

const ContentEspecialty = () => {

    const especialty = [
        {
            id: 1,
            nombre: "Desarrollo Web",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            id: 2,
            nombre: "Desarrollo Móvil",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            id: 3,
            nombre: "Desarrollo de Videojuegos",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            id: 4,
            nombre: "Desarrollo de Software",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            id: 5,
            nombre: "Desarrollo de Software",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        },
        {
            id: 6,
            nombre: "Desarrollo de Software",
            descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        }
    ]

    return (
        <div className="content-especialty">
            {
                especialty.map((especialidad) => {
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