export function inspect(){
    return function(
        target:any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args:any[]){
            console.log(`---- Método ${propertyKey} ----`);
            console.log(`---- Parâmetros: ${JSON.stringify(args)}`)
            const retorno = metodoOriginal.apply(this, args)
            console.log(`---- Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        }
        return descriptor
    }
}

/*
Template de decorator:
export function inspect(){
    return function(
        target:any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args:any[]){
            const retorno = metodoOriginal.apply(this, args)
            //faz a logica
            return retorno;
        }
        return descriptor
    }
}
A função de fora so é necessaria caso você tenha q passar parametros para o decorator. Caso faça a modificação chama sem o ()
*/