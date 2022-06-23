import React from 'react'
import LinkButton from '../components/layout/LinkButton'
import styles from './home.module.css'


function Sobre() {
  return (
    <section className={styles.home_container}>
      <h1>Sobre <span>nós!</span></h1>
      <h3>Olá, bem vindo a nossa página explicativa, somos uma empresa que presta serviços para Amazon, e temos forte vinculos com cupons disponiveis,caso tenha interesse em participar das nossas ofertas que são atualizadas diariamente verifique nossos produtos disponiveis hoje.</h3>
      <LinkButton to="/catalogo" text="Produtos" />
    </section>
  )
}

export default Sobre