import React from 'react'
import cama from '../components/img/cama.jpg'
import LinkButton from '../components/layout/LinkButton'
import styles from './produto.module.css'

const Produto1 = () => {
    return (
      <section className={styles.ajustcont}>
      <div className='container-center'>
        <div  className='card bg-danger'>
          <img className='styles.img' src={cama} alt="Sofa" />
          <div className='card-body bg-warning'>
            <h4 className='card-title'>Cama Box Casal</h4>
            <p className='card-text text-secondary'>Cama Box Casal + Colchão De Molas - Anjos - Classic Superlastic 138cm</p>
            <LinkButton to='/varproduto1' text='Detalhes' />
          </div>
        </div>
      </div>
      </section>
    )
  }
  
  export default Produto1