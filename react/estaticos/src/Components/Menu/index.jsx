// import home from "../../assets/icones/home-ativo.png"
// import maisCurtidas from "../../assets/icones/mais-curtidas-inativo.png"
// import maisVistas from "../../assets/icones/mais-vistas-inativo.png"
// import novas from "../../assets/icones/novas-inativo.png"
// import surpreenda from "../../assets/icones/surpreenda-me-inativo.png"
import Icon from "./Icon"
import icons from './icones.json'
import styles from './Menu.module.scss'

const Menu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                {icons.map((icon)=>{
                   return <Icon key={icon.id} icon={icon} styles={styles}/>
                })}
                {/* <li className={styles.menu__item}>
                    <img src={home} alt=""/>
                    <a href="/">Início</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt=""/>
                    <a href="/">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt=""/>
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt=""/>
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreenda} alt=""/>
                    <a href="/">Surpreenda-me</a>
                </li> */}
            </ul>
        </nav>
    )
}
export default Menu