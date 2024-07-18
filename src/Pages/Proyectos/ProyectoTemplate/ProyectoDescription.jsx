const ProyectoDescription = (props) => {
    const { proyectoInfo } = props;
    return (
        <div className="bg-black/20 rounded-lg p-3 lg:max-w-sm xl:max-w-md text-white">
            <h1 className="text-2xl font-bold text-start py-3">Descripción</h1>
            <p className="text-lg font-thin">
                {proyectoInfo.primerParrafo}
            </p><br />
            <p className="text-lg font-thin">
                {proyectoInfo.segundoParrafo}
            </p>
        </div>
    )
}

export default ProyectoDescription