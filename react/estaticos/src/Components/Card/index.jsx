const Card = ({styles,fav,open,photo}) => {
    return ( 
        <li className={styles.galeria__card}>
            <img 
                className={styles.galeria__imagem} 
                src={photo.imagem}
                alt={photo.titulo}
            />
            <p className={styles.galeria__descricao}>{photo.titulo}</p>
            <div>
                <p>{photo.creditos}</p>
                <span>
                    <img src={fav} alt="icone de coração"/>
                    <img src={open} alt="icone de abrir"/>
                </span>
            </div>
        </li> 
    );
}
 
export default Card;