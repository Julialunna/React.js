import styles from './PaginaInicial.module.scss'

import Banner from "componentes/Banner/Banner";
import Cabecalho from "componentes/Cabecalho";
import Galeria from "componentes/Galeria";
import Menu from "componentes/Menu";
import Populares from "componentes/Populares";
import Rodape from "componentes/Rodape";


export default function PaginaInicial(){
    return(
        <>
        <Cabecalho/>
        <main>
                <div className={styles.MenuEBanner}>
                    <Menu/>
                    <Banner/>
                </div>
            <div className={styles.galeria}>
                <div className={styles.galeria1}><Galeria/></div>
                <div className={styles.populares}><Populares/></div>
            </div>
        </main>
        <Rodape/>
        </>
    )
}