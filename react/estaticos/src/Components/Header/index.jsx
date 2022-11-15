import Logo from '../../assets/logo.png'
import Search from '../../assets/search.png'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.cabecalho}>
            <img src={Logo} alt="logo da pagina"/>
            <div className={styles.cabecalho__container}>
                <input type="text" placeholder="o que você procura?" className={styles.cabecalho__input}/>
                <img src={Search} alt="icone de lupa"/>
            </div>
        </header>
    )
}
export default Header;