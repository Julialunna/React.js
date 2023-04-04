import styles from './Rodape.module.scss';
import facebook from './facebook.svg'
import instagram from './instagram.svg';
import twitter from './twitter.svg';
export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <div className={styles.links__rodape}>
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={twitter} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
            </div>
            <div className={styles.desnvolvido__rodape}>
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}