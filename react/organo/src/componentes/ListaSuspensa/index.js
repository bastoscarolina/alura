import './ListaSuspensa.css'

export const ListaSuspensa = (props)=>{

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={event =>props.aoAlterado(event.target.value)}>
                <option value=" "></option>
                {props.itens.map(item=> <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}