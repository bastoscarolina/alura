import Tags from '../Tags';
import Card from '../Card';
import styles from './Gallery.module.scss';
import photos from './photos.json';
import open from '../../assets/open.png'
import favorito from '../../assets/favorito.png'
import { useState } from 'react';

const Gallery = () => {
    const [itens,setItens] = useState(photos)
    const tags = [...new Set(photos.map(valor=>valor.tag))]

    const filterPhotos = (tag)=>{
        const newPhotos = photos.filter(photo=>photo.tag === tag)

        setItens(newPhotos)
    }
    return ( 
        <section className={styles.galeria}>
            <h2>Navegue pela Galeria</h2>
            <Tags tags={tags} filterPhotos={filterPhotos} setItens={setItens}/>
            <ul className={styles.galeria__cards}>
                {itens.map(photo =>{
                    return <Card key={photo.id} styles={styles} fav={favorito} open={open} photo={photo} />
                })}
            </ul>
        </section>
    );
}
 
export default Gallery;