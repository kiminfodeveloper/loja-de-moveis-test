import styles from './home.module.css'
import logonav from '../components/img/logonav.png'
import LinkButton from '../components/layout/LinkButton'

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo ao <span>Nalu Moveis</span></h1>
      <p>Somos um E-commerce com vinculo direto com a Amazon!</p>
      <LinkButton to="/sobre" text="Sobre nós!" />
      <img src={logonav} alt="NaluMoveis" />
    
    </section>
  )
}

export default Home