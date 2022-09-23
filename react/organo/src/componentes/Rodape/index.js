import "./Rodape.css"

export const Rodape = ()=>{
    return (
        <footer className="rodape">
            <div>
                <ul>
                    <li>
                        <a href="facebook.com">
                            <img src="/imagens/fb.png" alt="logo Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com">
                            <img src="/imagens/tw.png" alt="logo Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com">        
                            <img src="/imagens/ig.png" alt="logo Instagram"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <img src="./imagens/logo.png" alt="logo Organo"/>
            </div>
            <div>
                <p> Desenvolvido por Alura</p>
            </div>
        </footer>
    )
}