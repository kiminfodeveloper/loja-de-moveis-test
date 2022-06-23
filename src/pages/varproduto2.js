import React from 'react'
import guardaroupa from '../components/img/guardaroupa.jpg'
import styles from './varproduto.module.css'

const VarProduto2 = () => {
  return (
    <section className='container bg-warning'>
        <article className='row pt-2'>
            <figure className='col-md-7'>
                <img className={styles.img} src={guardaroupa} alt="Guarda-Roupa" />
            </figure>
            <section className='col-md-5'>
                <article>
                    <h1>Guarda Roupa</h1>
                    <p>Guarda Roupa Dobrável Organizador De Roupa Azul 88130b</p>
                    <h2>R$ 207,99</h2>
                    <a href="https://www.amazon.com.br/Guarda-Roupa-Dobr%C3%A1vel-Organizador-88130b/dp/B00B5AVI78/ref=asc_df_B00B5AVI78/?tag=googleshopp00-20&linkCode=df0&hvadid=379799862716&hvpos=&hvnetw=g&hvrand=5655053510238957237&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074295&hvtargid=pla-922454201444&th=1">
                    <button className={styles.btn}>Comprar</button>
                    </a>
                </article>
            </section>
        </article>
    </section>
  )
}

export default VarProduto2