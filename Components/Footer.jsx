import React from 'react'
import '../Styles/Global.css'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <h3>Contactanos</h3>
        {/* Redes sociales */}
        <div className='boxRedes'>
          <img className='iconRedes' src="./img/redes/gmail.png" alt="Gmail" />
          <img className='iconRedes' src="./img/redes/instagram.png" alt="Instagram" />
          <img className='iconRedes' src="./img/redes/whatsapp.png" alt="Whatsapp" />
        </div>

        {/* Formulario de Contacto */}
        <form action="" method="post">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="user_name" />

          <label htmlFor="mail">Email</label>
          <input type="email" id="mail" name="user_email" />

          <label htmlFor="msg">Mensaje</label>
          <input type="text" id="msg" name="user_message" />

          <input type="submit" value="Send"/>
        </form>


      </div>
      <div className='boxCopi'>
        <Link className="copi" to="https://www.linkedin.com/company/hys-soluciones">&copy; 2024 H&S Soluciones</Link>
      </div>
    </>
  )
}

export default Footer