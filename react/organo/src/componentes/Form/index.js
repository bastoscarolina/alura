import "./Form.css";
import {CampoTexto} from '../CampoTexto'
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import { useState } from "react";

export const Form = (props) => {
    const [nome, setNome] = useState("")
    const [viagem, setViagem] = useState("")
    const [imagem, setImagem] = useState("")
    const [destino, setDestino]= useState("")

    const aoSalvar = (event)=>{
        event.preventDefault();
        props.aoCadastrarColaborador({nome, viagem, imagem, destino})
        setNome("")
        setViagem("")
        setImagem("")
        setDestino("")
    }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2> Preencha os dados para computar o voto</h2>
        <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite o nome" 
            valor={nome}
            aoAlterado={valor => setNome(valor)}/>
        <CampoTexto 
            obrigatorio={true} 
            label="Viagem" 
            placeholder="Digite qual foi a viagem" 
            valor={viagem}
            aoAlterado={valor => setViagem(valor)}/>
        <CampoTexto 
            obrigatorio={false} 
            label="Imagem" 
            placeholder="Digite o endereço da imagem" 
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}/>
        <ListaSuspensa 
            obrigatorio={true} 
            label="Destino" 
            itens={props.destinos}
            valor={destino}
            aoAlterado={valor => setDestino(valor)}/>
        <Botao>
            Criar card
        </Botao>
      </form>
    </section>
  );
};
