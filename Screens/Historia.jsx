import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Historias.css'
import '../Styles/Global.css'

const Historia = () => {
  return (
    <>
      <Navbar />
      <div className='containerHistorias'>
        <h3 className='title'>Un poco de historia...</h3>
        <img className="historiasImg" src="./img/historias.jpg" alt="Historias" />
        <div className='container'>
          <article className='card'>
            <img src="./img/Johnnie-Walker-BlackLabel.jpeg" alt="Johnnie-Walker-BlackLabel" />
            <h4>
              El escocés Johnnie Walker.
            </h4>
            <p>La historia del whisky Johnnie Walker se remonta a 1820, cuando John Walker, un tendero de
              Kilmarnock,
              Escocia, comenzó a mezclar whiskies de diferentes destilerías para crear un sabor único y
              distintivo. Su
              hijo, Alexander Walker, heredó el negocio y continuó perfeccionando la mezcla, creando las famosas
              marcas Johnnie Walker Red Label, Black Label y Blue Label.
            </p>
          </article>

          <article className='card'>
            <img src="./img/Jameson.jpg" alt="Jameson" />
            <h4>
              El irlandés Jameson.
            </h4>
            <p>
              El whisky irlandés Jameson se produce desde 1780 en la destilería Bow Street, en Dublín. La receta
              original, que se ha mantenido sin cambios durante siglos, utiliza cebada irlandesa malteada, agua
              pura del río Liffey y triple destilación. Jameson es uno de los whiskies irlandeses más populares
              del mundo y se disfruta solo, con hielo o en cócteles.
            </p>
          </article>

          <article className='card'>
            <img src="../img/Jack-Daniels.jpg" alt="Jack Daniel's" />
            <h4>
              El americano Jack Daniel's.
            </h4>
            <p>
              En Lynchburg, Tennessee, nació Jack Daniel's. Un joven apasionado por el whisky, Jack experimentó
              con recetas hasta crear su propio sabor único. En 1866, legalizó su negocio y su whisky ganó fama
              por su calidad. Tras su muerte en 1911, la destilería continuó sus métodos tradicionales, asegurando
              el sabor auténtico del whisky. Hoy en día, Jack Daniel's es una de las marcas de whisky más
              populares del mundo, símbolo del sur de Estados Unidos y de la tradición artesanal de la elaboración
              del whisky.
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </>
  ) 
}

export default Historia