import { Route, Routes, useParams } from 'react-router-dom'
import styles from './Post.module.css'
import posts from 'json/posts.json'
import PostModelo from 'componentes/PostModelo';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import './Post.css'
import NaoEncontrada from 'paginas/NaoEncontrada';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';
export default function Post() {

    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    const postsRecomendados=posts.filter((post)=>post.id!==Number(parametros.id)).slice(0,4)

    console.log(postsRecomendados)

    if (!post) {
        return <NaoEncontrada />
    }

    return (
        <Routes>
            <Route path='*' element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                            <h2>Outros posts que você pode gostar</h2>
                        <div className={styles.recomendados}>
                            <ul>

                            {postsRecomendados.map((post)=>{
                                return<li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            })}
                            </ul>
                        </div>
                    </PostModelo>
                } />
            </Route>
        </Routes>
    )
}