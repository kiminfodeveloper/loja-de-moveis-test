import React from 'react'
import cama from '../components/img/cama.jpg'
import styles from './varproduto.module.css'

const VarProduto1 = () => {
  return (
    <section className='container bg-warning'>
        <article className='row pt-2'>
            <figure className='col-md-7'>
                <img className={styles.img} src={cama} alt="Cama" />
            </figure>
            <section className='col-md-5'>
                <article>
                    <h1>Cama Box Casal</h1>
                    <p>Cama Box Casal + Colchão De Molas - Anjos - Classic Superlastic 138cm</p>
                    <h2>R$ 989,00</h2>
                    <a href="https://www.amazon.com.br/Cama-Box-Casal-Colch%C3%A3o-Molas/dp/B0894JN5BR/ref=asc_df_B0894JN5BR/?tag=googleshopp00-20&linkCode=df0&hvadid=379787221631&hvpos=&hvnetw=g&hvrand=4088359304575799754&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074295&hvtargid=pla-1291705354017&psc=1">
                    <button className={styles.btn}>Comprar</button>
                    </a>
                </article>
            </section>
        </article>
    </section>
  )
}

export default VarProduto1