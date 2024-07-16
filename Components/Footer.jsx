import React from 'react'
import '../Styles/Global.css'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <h3>Contactanos</h3>
        <div className='boxRedes'>
          <img className='iconRedes' src="./img/redes/gmail.png" alt="Gmail" />
          <img className='iconRedes' src="./img/redes/instagram.png" alt="Instagram" />
          <img className='iconRedes' src="./img/redes/whatsapp.png" alt="Whatsapp" />
        </div>
      </div>
      <div className='boxCopi'>
        <Link className="copi" to="https://www.linkedin.com/in/ercegovichezequiel/">&copy; 2024 Ezequiel Ercegovich</Link>
      </div>
    </>
  )
}

export default Footer