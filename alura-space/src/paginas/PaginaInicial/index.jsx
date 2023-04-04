import Banner from "../../componentes/Banner/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Menu from "../../componentes/Menu";
import styles from './PaginaInicial.module.scss'


export default function PaginaInicial(){
    return(
        <>
        <Cabecalho/>
        <div className={styles.MenuEBanner}>
            <Menu/>
            <Banner/>
        </div>
        </>
    )
}