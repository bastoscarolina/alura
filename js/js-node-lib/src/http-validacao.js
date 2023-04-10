function extraiLinks(arrLinks){
    const links = arrLinks.map(element => {
        return Object.values(element).join()
    });
    return links
}

async function checaStatus(listaUrl){
    const arrStatus = await Promise.all(
        listaUrl.map(async item=>{
            try {
                const res = await fetch(item)
                return res.status
            } catch (error) {
                return manejaErros(error)
            }
        })
    )
    return arrStatus
}
function manejaErros(erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrado'
    }else{
        return 'ocorreu um erro'
    }
}
export default async function listaValidada(listaLinks){
    const links = extraiLinks(listaLinks)
    const status = await checaStatus(links)
    return listaLinks.map((obj, indice)=>({
        ...obj,
        status: status[indice]
    }))
}