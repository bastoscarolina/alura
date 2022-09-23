import { Banner } from './componentes/Banner';
import { Form } from './componentes/Form';
import {useState} from  'react'
import { Time } from './componentes/Time';
import { Rodape } from './componentes/Rodape';

function App() {
  const [colaboradores,setColaboradores] = useState([])

  const destinos =[
    {
      nome:'Rio de Janeiro',
      corPrimaria:"#57C278",
      corSecundaria:"#D9F7E9"
    },
    {
      nome:'Belo Horizonte',
      corPrimaria:"#82CFFA",
      corSecundaria:"#E8F8FF"
    }, 
    {
      nome: 'São Paulo',
      corPrimaria:"#A6D157",
      corSecundaria:"#F0F8E2"
    },
    {
      nome:'Foz do Iguaçu',
      corPrimaria:"#E06869",
      corSecundaria:"#FdE7E8"
    }, 
    {
      nome:'Fortaleza',
      corPrimaria:"#DB6EBF",
      corSecundaria:"#FAE9F5"
    },
    {
      nome: 'Aracaju',
      corPrimaria:"#FFBA05",
      corSecundaria:"#FFF5D9"
    }]
  const adicionaColaborador = (colaborador)=>{
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner/>
      <Form destinos={destinos.map(destino => destino.nome)} aoCadastrarColaborador={colaborador => adicionaColaborador(colaborador)}/>
      {destinos.map(destino => 
      <Time 
        key={destino.nome} 
        nome={destino.nome} 
        corPrimaria={destino.corPrimaria} 
        corSecundaria={destino.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.destino === destino.nome)}/>)}
        <Rodape/>
    </div>
  );
}

export default App;
