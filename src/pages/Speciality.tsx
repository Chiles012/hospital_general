import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Speciality = () => {

    const { id } = useParams<{ id: string }>();
    const [especialidad, setEspecialidad] = useState<any>({
        id: 0,
        nombre: "",
        descripcion: ""
    });

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

    useEffect(() => {
        const especialidad = especialty.find(especialidad => especialidad.id === parseInt(id!));
        setEspecialidad(especialidad);
    }, [id])

    return (
        <div className="container">
            <h1>{especialidad.nombre}</h1>
            <br />
            <div style={{ width: '30%' }} className="grid-2">
                <button className="btn">Postularme</button>
                <button className="btn outline">Guardar</button>
            </div>
            <p
                className="text-justify"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum omnis porro magnam, eaque quisquam delectus voluptate itaque ipsam aut laboriosam dolore ratione autem minus exercitationem! Ex recusandae tempore officiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias amet sequi perferendis voluptatem quae, atque necessitatibus cupiditate debitis pariatur est qui sed autem, ipsum eius. Delectus numquam dolor aperiam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis harum debitis quaerat soluta autem laudantium cupiditate alias ratione? Cumque ipsum nostrum aliquam sequi explicabo, ad voluptatum amet sapiente laborum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat in accusamus ipsam quisquam nobis fugiat aut, repellendus tenetur quam quibusdam. Ipsam tenetur ipsum nam repellat, facere minus accusantium illum necessitatibus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem soluta veniam cum dolorem exercitationem officiis qui libero, obcaecati ad laborum id temporibus eveniet doloremque porro numquam accusamus at optio sint.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit perspiciatis illum error alias delectus expedita, excepturi velit ea quis aspernatur vel odit molestiae. Magnam reprehenderit harum quas esse! A!
            </p>
        </div>
    );
};

export default Speciality;