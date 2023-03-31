import './Rodape.css';
const Rodape = (props)=>{
    return(
        <footer className='footer'>
    
            <div class="lista">
                <ul>
                    <li><a href="facebook.com"target={'_blank'}><img src='imagens/fb.png' alt='facebook'></img></a></li>
                    <li><a href="twitter.com"><img src='imagens/tw.png' alt='twitter'></img></a></li>
                    <li><a href="instagram.com"><img src='imagens/ig.png' alt='instagram'></img></a></li>
                </ul>
            </div>

            <div class="logo"><img src='imagens/logo.png' alt='logo' className='logo'></img></div>
            <div class="desenvolvido">
                <p>Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}
export default Rodape;