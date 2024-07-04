import ProyectoFunctionalities from "./ProyectoFunctionalities";
import ProyectoDescription from "./ProyectoDescription";
import ProyectoTecnologies from "./ProyectoTecnologies";
import ProyectoImage from "./ProyectoImage";

const ProyectoPage = (props) => {
    const { proyectoInfo, funcionalidades, tecnologias } = props;
    return (
        <>
            <h1 className='text-5xl font-bold text-center p-3 animate-fade animate-once animate-duration-500 animate-delay-200 animate-ease-in-out'>Datos del proyecto</h1>
            <h3 className='text-3xl font-bold text-center p-4 text-white animate-fade animate-once animate-duration-600 animate-delay-300 animate-ease-in-out'>{proyectoInfo.titulo}</h3>
            <div className='flex flex-wrap gap-3 justify-items-center place-content-evenly animate-fade animate-once animate-duration-700 animate-delay-400 animate-ease-in-out'>
                <ProyectoImage proyectoInfo={proyectoInfo} />
                <ProyectoTecnologies tecnologias={tecnologias} />
                <ProyectoDescription proyectoInfo={proyectoInfo} />
                <ProyectoFunctionalities funcionalidades={funcionalidades} />
            </div>
        </>
    )
}

export default ProyectoPage