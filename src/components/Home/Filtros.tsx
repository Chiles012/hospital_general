import { FC } from "react";

const Filtros: FC<{ handleSearch: any }> = ({ handleSearch }) => {

    return (
        <div className="filtros container">
            <div className="filtros-content">
                <div className="input-icon">
                    <i className="fas fa-search"></i>
                    <input onChange={handleSearch} type="text" placeholder="Buscar especialidad" />
                </div>
            </div>
        </div>
    );
}

export default Filtros;