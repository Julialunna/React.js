import banner from './banner.png';
import styles from './Banner.module.scss';

export default function Banner(){

    return(
        <div className={styles.banner}>
            <img className={styles.img__banner} src={banner} alt="Imagem terra vista do espaço"/>
            <h1>A galeria mais completa de fotos do espaço!</h1>
        </div>
        /*<main>
            <section className={styles.principal}/>
                <div className={styles.principal__imagem}>
                    <h1>A galeria mais completa do espaço</h1>
                    <img src={banner} alt="A imagem da terra vista do espaço" srcset="" />
                </div>
            </section>
        </main>*/
    )
}