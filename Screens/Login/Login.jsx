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
        <img className="imgIS" src="./img/banner-whisky-cigarro.jpg" alt="banner-whisky-cigarro" />
        <div className='containerForm'>
          <h3 className='title'>Inicia Sesion</h3>
          <form action="" className='containerFormIS' onSubmit={handleSubmit}>

            <div>
              <label htmlFor="email">Ingrese su email:</label>
              <input type="email" id="email" name="email" className='inputIS' placeholder='H&S@gmail.com' />
            </div>

            <div>
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
      </div>
      <Footer />
    </>
  )
}

export default IniciaSesion