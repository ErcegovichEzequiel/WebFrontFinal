import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../Styles/Global.css'
import '../../Styles/IniciaSesion-Registro.css'
import { login } from '../../src/fetching/auth.fetching'
import { useNavigate } from 'react-router-dom'

const IniciaSesion = () => {
  const [errorText, setErrorText] = useState('')
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      const usuario = {
        email: event.target.email.value,
        password: event.target.password.value
      }
      await login(usuario)
      setErrorText('')
      navigate('/')
    }
    catch (error) {
      setErrorText(error.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className='containerInciarSecionCompleto'>

        <div className='containerBanner'>
          
          <img className="imgIS" src="./img/banner-whisky-cigarro.jpg" alt="banner-whisky-cigarro" />
        
        </div>

        <div className='containerForm'>

          <h3 className='title'>Inicia Sesion</h3>

          <form action="" className='containerFormIS' onSubmit={handleSubmit}>

            <div className='containerInput'>

              <label htmlFor="email">Ingrese su email:</label>

              <input type="email" id="email" name="email" className='inputIS' placeholder='hermes@hermes.com' />

            </div>

            <div className='containerInput'>

              <label htmlFor="password">Ingrese su contraseña:</label>

              <input type="password" id="password" name="password" className='inputIS' placeholder='********' />

            </div>

            {errorText
              &&
              <span style={{ color: 'red' }}>
                {errorText}
              </span>
            }

            <button type="submit" className='btnIS'>Iniciar Sesion</button>

          </form>

        </div>

        <div className='containerText'>
          <h3>¡Bienvenido a Nuestra Exclusiva Comunidad de Whisky!</h3>
          <p>
            Para realizar compras en nuestra tienda y disfrutar de una experiencia de compra personalizada, por favor inicia sesión en tu cuenta. Como miembro registrado, tendrás acceso a:
          </p>
          <p>
            <b>Compras Exclusivas:</b> Solo los usuarios registrados pueden realizar compras.
            <br />
            <b>Ofertas y Descuentos:</b> Disfruta de descuentos especiales y promociones.
            <br />
            <b>Acceso Prioritario:</b> Sé el primero en conocer nuestras nuevas llegadas y ediciones limitadas.
            <br />
            <b>Eventos Especiales:</b> Participa en catas y eventos exclusivos para miembros.
          </p>

          <p>
            Iniciar sesión es rápido y sencillo. ¡No te pierdas estos beneficios exclusivos!
          </p>

        </div>

      </div>
      <Footer />
    </>
  )
}

export default IniciaSesion