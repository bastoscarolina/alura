import styles from './Favorites.module.scss'
import favorites from './favorites.json'
const Favorites = () => {
    return ( 
        <aside className={styles.populares}>
            <h2>Favoritos</h2>
            <ul className={styles.populares__imagens}>
                {favorites.map(favorite => {
                    return(
                        <li key={favorite.id}>
                            <img src={favorite.path} alt={favorite.alt}/>
                        </li>
                    )
                })}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
     );
}
 
export default Favorites;