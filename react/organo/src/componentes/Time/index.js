import { Card } from '../Card'
import './Time.css'


export const Time = (props) =>{
    return (
        props.colaboradores.length> 0 &&
        <section className='time' style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderBottomColor:props.corPrimaria}}>{props.nome}</h3>
            <div className="cards">
                {props.colaboradores.map(colaborador => <Card key={colaborador.nome} corFundo={props.corPrimaria} imagem={colaborador.imagem} nome={colaborador.nome} viagem={colaborador.viagem}/> )}
            </div>
        </section>
    )
}