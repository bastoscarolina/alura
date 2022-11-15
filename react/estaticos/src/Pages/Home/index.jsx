import Header from "Components/Header";
import Menu from "Components/Menu"
import Footer from "Components/Footer";
import Gallery from "Components/Gallery";
import Favorites from "Components/Favorites";
import banner from 'assets/banner.png'
import styles from './Home.module.scss'

const Home = ()=>{
    return (
        <>
            <Header/>
            <main>
                <section className={styles.principal}>
                    <Menu/>
                    <div className={styles.principal__imagem}>
                        <h1>
                            A galeria mais completa do espaço
                        </h1>
                        <img src={banner} alt=""/>
                    </div>
                </section>
                <div className={styles.galeria}>
                    <Gallery/>
                    <Favorites/>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Home;