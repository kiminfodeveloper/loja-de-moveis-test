import React from 'react'
import sofa from '../components/img/sofa.jpg'
import styles from './varproduto.module.css'

const VarProduto = () => {
  return (
    <section className='container bg-warning'>
        <article className='row pt-2'>
            <figure className='col-md-7'>
                <img className={styles.img} src={sofa} alt="Sofa" />
            </figure>
            <section className='col-md-5'>
                <article>
                    <h1>Sofá Retrátil</h1>
                    <p>Sofá Retrátil e Reclinável 2,00m Concept Suede Cinza - SoftPlus</p>
                    <h2>R$ 1.749,90</h2>
                    <a href="https://www.amazon.com.br/Retr%C3%A1til-Reclin%C3%A1vel-Concept-Suede-Cinza/dp/B09H41QFPJ/ref=asc_df_B09H41QFPJ/?tag=googleshopp00-20&linkCode=df0&hvadid=379735364577&hvpos=&hvnetw=g&hvrand=7286013844996633439&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074295&hvtargid=pla-1594029226236&psc=1">
                    <button className={styles.btn}>Comprar</button>
                    </a>
                </article>
            </section>
        </article>
    </section>
  )
}

export default VarProduto