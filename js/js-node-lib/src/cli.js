import pegaArquivo from "./index.js";
import fs from 'fs'
import listaValidada from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(argumentos){
    const caminho = argumentos[2]
    const valida = argumentos[3] === '--valida'

    try {
        fs.lstatSync(caminho) 
    } catch (error) {
        if(error == 'ENOENT'){
            console.log('esse arquivo ou diretório não existe')
            return
        }
    }
    if(fs.lstatSync(caminho).isFile()){
        const links = await pegaArquivo(caminho)
        if(valida){
            console.log(await listaValidada(links))
        }else{
            console.log(links)
        }
    }else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho)
        arquivos.forEach(async arquivo=>{
            const lista = await pegaArquivo(`${caminho}/${arquivo}`)
            if(valida){
                console.log(await listaValidada(lista))
            }else{
                console.log(lista)
            }
        })
    }  
}
processaTexto(caminho)