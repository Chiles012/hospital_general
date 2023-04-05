const Filtros = () => {
    return (
        <div className="filtros container">
            <div className="filtros-content">
                <div className="input-icon">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Buscar" />
                </div>
                <select name="especialidad" id="especialidad">
                    <option value="0">Especialidad</option>
                    <option value="1">Especialidad 1</option>
                    <option value="2">Especialidad 2</option>
                    <option value="3">Especialidad 3</option>
                </select>
            </div>
            <button className="btn">Buscar</button>
        </div>
    );
}

export default Filtros;