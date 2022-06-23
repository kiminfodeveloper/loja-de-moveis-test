import React from 'react'
import sofa from '../components/img/sofa.jpg'
import LinkButton from '../components/layout/LinkButton'
import styles from './produto.module.css'

const Produto = () => {
  return (
    <section className={styles.ajustcont}>
    <div className='container-center'>
      <div  className='card bg-danger'>
        <img className='styles.img' src={sofa} alt="Sofa" />
        <div className='card-body bg-warning'>
          <h4 className='card-title'>Sofá Retrátil</h4>
          <p className='card-text text-secondary'>Sofá Retrátil e Reclinável 2,00m Concept Suede Cinza - SoftPlus</p>
          <LinkButton to='/varproduto' text='Detalhes' />
        </div>
      </div>
    </div>
    </section>
  )
}

export default Produto

