import './Time.css';
import Colaborador from '../Colaborador'
const Time = (props)=>{
    return(
        (props.colaboradores.length>0)&&
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>
                {props.nome}
            </h3>
            <div class="colaboradores">
                {props.colaboradores.map(colaborador=><Colaborador nome={colaborador.nome} cargo={colaborador.cargo} key={colaborador.nome}imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}
export default Time;