import Footer from 'components/Footer/Footer.component'
import NavBar from 'components/NavBar/NavBar.component'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='container home'>
        <div className='jumbotron'>
          <h1 className='display-4'>DTVendas</h1>
          <br />
          <p className='lead'>
            Analise o desempenho das suas vendas por diferentes perspectivas
          </p>          
          <p>
            Esta aplicação consiste em exibir um dashboard a partir de dados
            fornecidos por um back end construído com Spring Boot.
          </p>
          <br /><br />
          <Link to="/dashboard" className="btn btn-primary btn-lg">Aceder ao Dashboard</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
