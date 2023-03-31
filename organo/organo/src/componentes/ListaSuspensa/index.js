import "./ListaSuspensa.css"

const ListaSuspensa =(props)=>{
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} onChange={evento=>props.aoAlterado(evento.target.value)}value={props.value}> 
                {props.itens.map((item, index)=><option key={index}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;
