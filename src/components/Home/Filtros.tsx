const Filtros = () => {
    return (
        <div className="filtros container">
            <div className="filtros-content">
                <div className="input-icon">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Buscar especialidad" />
                </div>
                <button className="btn">Buscar</button>
            </div>
        </div>
    );
}

export default Filtros;