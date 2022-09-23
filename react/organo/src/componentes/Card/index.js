import './Card.css'

export const Card = (props)=>{
    return (
        <div className="card">
            <div className="cabecalho" style={{backgroundColor:props.corFundo}}>
                <img src={props.imagem} alt={props.nome}/>
            </div>
            <div className="rodape">
                <h4 style={{color:props.corFundo}}>{props.nome}</h4>
                <h5>{props.viagem}</h5>
            </div>
        </div>
    )
}