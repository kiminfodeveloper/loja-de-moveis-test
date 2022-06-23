import React from 'react'
import guardaroupa from '../components/img/guardaroupa.jpg'
import LinkButton from '../components/layout/LinkButton'
import styles from './produto.module.css'

const Produto2 = () => {
    return (
      <section className={styles.ajustcont}>
      <div className='container-center'>
        <div  className='card bg-danger'>
          <img src={guardaroupa} alt="Sofa" />
          <div className='card-body bg-warning'>
            <h4 className='card-title'>Guarda Roupa</h4>
            <p className='card-text text-secondary'>Guarda Roupa Dobrável Organizador De Roupa Azul 88130b</p>
            <LinkButton to='/varproduto2' text='Detalhes' />
          </div>
        </div>
      </div>
      </section>
    )
  }
  
  export default Produto2