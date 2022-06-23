import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Catalogo from '../../pages/catalogo'
import Home from '../../pages/home'
import Login from '../../pages/login'
import Sobre from '../../pages/sobre'
import Container from '../layout/Container'
import styles from './Navbar.module.css'
import logo from '../img/logonav.png'
import VarProduto from '../../pages/varproduto'
import VarProduto1 from '../../pages/varproduto1'
import VarProduto2 from '../../pages/varproduto2'


const Navbar = () => {
  return (
    <Router>
        <nav className={styles.navbar}>
            <Container>
            <Link to='/'> <img className={styles.img} src={logo} alt="NaluMoveis" /> </Link>
            <ul className={styles.list}>
            <li className={styles.item}>
            <Link to='/'>Home</Link>
            </li>
            <li className={styles.item}>
            <Link to='/catalogo'>Produtos</Link>
            </li>
            <li className={styles.item}>
            <Link to='/sobre'>Sobre nós!</Link>
            </li>
            <li className={styles.item}>
            <Link to='/login'>Login/Cadastro</Link>
            </li>
            </ul>
            </Container>
        </nav>
    <Container customClass="min-heigth">
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/login' element={<Login />} />
            <Route path='/varproduto' element={<VarProduto />} />
            <Route path='/varproduto1' element={<VarProduto1 />} />
            <Route path='/varproduto2' element={<VarProduto2 />} />
        </Routes>
    </Container>

    </Router>
    
  )
}

export default Navbar