import chalk from 'chalk';
import fs from 'fs';


function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'deu ruim'))
}
// function pegaArquivo(caminhoArquivo){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoArquivo, encoding, (err, res)=>{
//         try{
//             console.log(chalk.green(res))
//         }catch{
//             trataErro(err)
//         }
//     })
// }

// function pegaArquivo(caminhoArquivo){
//     const encoding = 'utf-8'
//     fs.readFile(caminhoArquivo, encoding, (err, res)=>{
//         if(err){
//             trataErro(err)
//         }
//         console.log(chalk.magentaBright(res))
//     })
// }
// function pegaArquivo(caminhoArquivo){
//     const encoding = 'utf-8'
//     fs.promises
//     .readFile(caminhoArquivo, encoding)
//     .then(texto => console.log(chalk.greenBright(texto)))
//     .catch(err=>trataErro(err))
// }
async function pegaArquivo(caminhoArquivo){
    const encoding = 'utf-8'
    try {
        const texto = await fs.promises
        .readFile(caminhoArquivo, encoding)
        return extraiLinks(texto)
    } catch (error) {
        trataErro(error)
    }
}

function extraiLinks(texto){
    const regex= /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm

    const capturas = [...texto.matchAll(regex)]
    const resultados = capturas.map(captura =>({[captura[1]]:captura[2]}))
    return resultados.length !== 0 ? resultados : "Não há links no arquivo" 
}

export default pegaArquivo
// pegaArquivo('./arquivos/texto.md')
// pegaArquivo('./arquivos/')