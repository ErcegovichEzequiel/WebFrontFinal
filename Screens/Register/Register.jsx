import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import '../../Styles/Global.css'
import '../../Styles/IniciaSesion-Registro.css'
import { register } from '../../src/fetching/auth.fetching'
import { useNavigate } from 'react-router-dom'

const Registrate = () => {
  const [errorText, setErrorText] = useState('') 
  const navigate = useNavigate() 
  const handleSubmit = async (event) => {
    try {
      event.preventDefault()
      
      const usuario = { 
        email: event.target.email.value,
        password: event.target.password.value,
      }
      await register(usuario) 
      setErrorText('') 
      navigate('../Login') 
    }
    catch (error) {
      setErrorText(error.message) 
    }
  }
  return (
    <>
      <Navbar />
      <div className='containerInciarSecionCompleto'>
        <img className="imgRegistro" src="./img/vaso-whisky.jpg" alt="vaso-whisky" />
        <div className='containerForm'>
          <h3 className='titleRegistro'>Registrate</h3>
          <form action="" className='containerFormIS' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder='H&S@gmail.com' className='inputIS'  />
            </div>
            <div>
              <label htmlFor="password">Contraseña</label>
              <input type="password" id="password" name="password" className="inputIS" placeholder="**********"  />
            </div>
            {errorText
              &&
              <span style={{ color: 'red' }}>
                {errorText}
              </span>
            }

            <button type="submit" className='btnIS'>Registrate</button>

          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Registrate