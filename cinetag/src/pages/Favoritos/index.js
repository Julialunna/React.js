import Banner from 'components/Banner'
import styles from './Favoritos.module.css'
import Titulo from 'components/Titulo'
import videos from 'json/db.json'
import Card from 'components/Card';
import { useFavoritoContext } from 'contextos/Favoritos';

export default function Favoritos(){
    const{favorito}=useFavoritoContext();
    return(
        <>
        <Banner imagem='favoritos'/>    
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            {favorito.map((video)=>{
                return <Card {...video} key={video.id}/>
            })}
        </section>
        </>
    )
}