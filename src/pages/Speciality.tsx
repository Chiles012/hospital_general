import { collection, doc, getDoc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import app from "../config/firebase.config";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import { useSelector } from "react-redux";

const Speciality = () => {

    const { id } = useParams<{ id: string }>();
    const [especialty, setEspecialty] = useState<any>([]);
    const [open, setOpen] = useState<boolean>(false);
    const [especialidad, setEspecialidad] = useState<any>({
        id: 0,
        nombre: "",
        descripcion: ""
    });
    const [docs, setDocs] = useState<any>({
        CIFRHS: "",
        ENARM: "",
        Acta_Nacimiento: "",
        Kardex: "",
        Titulo: "",
        Cedula: "",
        Acta_Examen_Profesional: "",
        CV: "",
        Constancia_Servicio_Social: "",
        Acreditacion_Ingles: "",
        INE: "",
        CURP: "",
        RFC: "",
        Fotografia_Frente: "",
        Fotografia_Frente_2: "",
        Cartas_Motivos: "",
        Recibo_Pago: "",
    });

    const { user } = useSelector((state: any) => state.user);

    const getEspecialty = async () => {

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

        setEspecialty(especialidades);

    };

    useEffect(() => {
        getEspecialty();
    }, []);

    useEffect(() => {
        const especialidad = especialty.find((especialidad: any) => especialidad.id === id!);
        setEspecialidad(especialidad);
    }, [id, especialty])

    const updateFiles = async (e: any, doc: string) => {
        e.preventDefault();

        try {
            const storage = getStorage(app);

            const file = e.target.files[0];

            const storageRef = ref(storage, '/docs/' + file.name);

            const uploadTask = await uploadBytes(storageRef, file);

            const downloadURL = await getDownloadURL(uploadTask.ref);

            setDocs({
                ...docs,
                [doc]: downloadURL
            });


        } catch (error: any) {
            alert(error.message || 'Error al subir los archivos');   
        }

    }

    const handlerSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const db = getFirestore(app);

            // obtener por id la especialidad
            const especialidadRef = await getDoc(doc(db, 'especialidades', id!));

            // obtener los documentos de la especialidad
            const users = especialidadRef.data()?.users;

            // agregar el usuario a la especialidad
            users.push({
                ...user,
                docs
            });

            // actualizar la especialidad
            await updateDoc(doc(db, 'especialidades', id!), {
                users,
            });

            setOpen(false);

        } catch (error: any) {
            alert(error.message || 'Error al subir los archivos');
        }
    }

    return (
        <div className="container">
            <Modal
                isOpen={open}
                onRequestClose={() => setOpen(false)}
            >
                <h1>Sube tus documentos</h1>
                <form action="" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <label htmlFor="">CIFRHS</label>
                        <input onChange={(e) => updateFiles(e, 'CIFRHS')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">ENARM</label>
                        <input onChange={(e) => updateFiles(e, 'ENARM')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Acta de nacimiento</label>
                        <input onChange={(e) => updateFiles(e, 'Acta_Nacimiento')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Kardex</label>
                        <input onChange={(e) => updateFiles(e, 'Kardex')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Titulo</label>
                        <input onChange={(e) => updateFiles(e, 'Titulo')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Cedula</label>
                        <input onChange={(e) => updateFiles(e, 'Cedula')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Acta Examen Profesional</label>
                        <input onChange={(e) => updateFiles(e, 'Acta_Examen_Profesional')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">CV</label>
                        <input onChange={(e) => updateFiles(e, 'CV')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Constancia Servicio Social</label>
                        <input onChange={(e) => updateFiles(e, 'Constancia_Servicio_Social')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Acreditacion Ingles</label>
                        <input onChange={(e) => updateFiles(e, 'Acreditacion_Ingles')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">INE</label>
                        <input onChange={(e) => updateFiles(e, 'INE')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">CURP</label>
                        <input onChange={(e) => updateFiles(e, 'CURP')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">RFC</label>
                        <input onChange={(e) => updateFiles(e, 'RFC')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Fotografia Frente</label>
                        <input onChange={(e) => updateFiles(e, 'Fotografia_Frente')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Fotografia Frente 2</label>
                        <input onChange={(e) => updateFiles(e, 'Fotografia_Frente_2')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Cartas Motivos</label>
                        <input onChange={(e) => updateFiles(e, 'Cartas_Motivos')} type="file" name="" id="" />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                        
                    }}>
                        <label htmlFor="">Recibo Pago de beca</label>
                        <input onChange={(e) => updateFiles(e, 'Recibo_Pago')} type="file" name="" id="" />
                    </div>
                    <span></span>
                    <button className="btn">Postularme</button>
                    <button onClick={() => setOpen(false)} className="btn">Cancelar</button>
                </form>
            </Modal>
            {
                !especialidad ? 
                <h1
                    style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        color: '#5b70f4'
                    }}
                >
                    No existe el Usuario
                </h1> :
                <>
                    <h1>{especialidad!.nombre}</h1>
                    <br />
                    <div style={{ width: '30%' }} className="grid-2">
                        <button onClick={() => {
                            if (!user) {
                                alert('Debes iniciar sesión');
                                return;
                            } 

                            setOpen(true);
                        }} className="btn">Postularme</button>
                    </div>
                    <p
                        className="text-justify"
                    >
                        {especialidad!.descripcion}    
                    </p>
                </>
            }
        </div>
    );
};

export default Speciality;