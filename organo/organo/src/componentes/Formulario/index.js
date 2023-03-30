import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css"

const Formulario = ()=>{
    const times=[
        'Pogramação', 
        'Front-end', 
        'Data Science', 
        'UX e Design', 
        'Mobile', 
        'Inovação e gestão'
    ]
    return(
        <section className="formulario">
            <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
            <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
            <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            <ListaSuspensa label="Time"key={times} itens={times}/>
            </form>
        </section>
    )
}
export default Formulario;