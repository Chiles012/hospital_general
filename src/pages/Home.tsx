import { useEffect, useState } from 'react';
import { Banner, ContentEspecialty, Filtros,  } from '../components/Home';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import '../sass/pages/home.page.scss';
import app from '../config/firebase.config';

const Home = () => {

    const [especialidades, setEspecialidades] = useState([]);
    const [auxEspecialidades, setAuxEspecialidades] = useState([]);

    const getEspecialidades = async () => {

        const db = getFirestore(app);

        const especialidadesRef = collection(db, 'especialidades');

        const especialidadesSnap = await getDocs(especialidadesRef);

        const especialidades: any = [];

        especialidadesSnap.forEach((especialidad: any) => {
            especialidades.push({
                id: especialidad.id,
                ...especialidad.data()
            });
        });

        setEspecialidades(especialidades);

        setAuxEspecialidades(especialidades);
    };

    useEffect(() => {
        getEspecialidades();
    }, []);

    const handleSearch = (e: any) => {
        const { value } = e.target;

        console.log(value);

        if (value.length > 0) {
            const aux = especialidades.filter((especialidad: any) => {
                return especialidad.nombre.toLowerCase().includes(value.toLowerCase());
            });
            setAuxEspecialidades(aux);
        } else {
            setAuxEspecialidades(especialidades);
        }
    };

    return (
        <>
            <Banner />
            <Filtros
                handleSearch={handleSearch}
            />
            <ContentEspecialty
                especialidades={auxEspecialidades}
            />
        </>
    );
};

export default Home;