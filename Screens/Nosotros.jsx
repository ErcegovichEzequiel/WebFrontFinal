import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Global.css'
import '../Styles/Nosotros.css'

const Nosotros = () => {
  return (
    <>
      <Navbar />
      <div className='nosotrosContainer'>
        <h2>
          Empecemos con nuestra historia..
        </h2>
        <div className='nosotrosText'>
          <p>
            Un sueño hecho realidad: La creación de <b>HERMES</b>!
            <br />
            En el corazón de Buenos Aires, dos apasionados del whisky y el tabaco, Ezequiel y Damian, soñaban con
            crear un espacio único donde compartir su pasión con el mundo. Ambos compartían una profunda admiración
            por la tradición y la artesanía que se esconde detrás de cada botella de whisky y cada hoja de
            tabaco.<br />

            Ezequiel, con su amplio conocimiento del mundo del whisky y su paladar exigente, era el encargado de
            seleccionar cuidadosamente cada producto que llegaría a las estanterías de la tienda. Damian, por su
            parte, aportaba su experiencia en el mundo del tabaco, curando una colección de puros y cigarrillos de
            la más alta calidad.<br />

            Tras meses de planificación y búsqueda del lugar perfecto, <b>HERMES</b> abrió sus puertas por primera
            vez. Desde el primer día, la tienda se convirtió en un refugio para los amantes del whisky y el tabaco,
            un lugar donde podían encontrar una amplia variedad de productos de calidad, asesoramiento experto y un
            ambiente acogedor. <br />

            Con el paso del tiempo, <b>HERMES</b> se convirtió en un referente en la ciudad, organizando eventos de
            degustación, catas y talleres para compartir su pasión con la comunidad. Ezequiel y Damian se
            convirtieron en figuras reconocidas en el sector, invitando a expertos y maestros destiladores a
            compartir sus conocimientos con sus clientes.<br />

            Hoy en día, <b>HERMES</b> es más que una simple tienda, es un lugar donde la pasión por el whisky y el
            tabaco se respira en cada rincón. Un espacio donde los clientes pueden descubrir nuevos sabores,
            aprender sobre la historia y tradición de estos productos y disfrutar de un ambiente único y acogedor.
          </p>
        </div >
        <div className='nosotrosImgContainer'>
          <img className="imgNosotros" src="../img/nosotros.jpeg" alt="nosotros" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Nosotros