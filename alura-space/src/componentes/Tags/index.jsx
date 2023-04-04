import styles from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'
export default function Tags({tags, FiltrarFotos, setItens}){
    console.log(tags)
    return(
        <div className={styles.tags}>
            <p>Filtre por tags</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag)=>{
                    return(

                        <li onClick={()=>FiltrarFotos(tag)}key={tag}>{tag}</li>
                    )
                })}
                <li onClick={()=>setItens(fotos)}>
                    Todas
                </li>
            </ul>
        </div>
    )
}