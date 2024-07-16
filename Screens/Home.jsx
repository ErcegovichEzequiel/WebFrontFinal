import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../Styles/Global.css'
import '../Styles/Home.css'
import { Link } from 'react-router-dom';


const Home = () => {

  const handleExternalLinkClick = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Navbar />
      <div className='homeContainer'>

        <h2 className='homeTitulo'>¡Únete a Nuestra Comunidad Exclusiva de Amantes del Whisky!</h2>
        <div className='homeContenido'>

          <img className='homeImg' src="./img/historias.jpg" alt="Home" />

          <div className='homeDiv'>
            <p>
              Al registrarte con nosotros, no solo te unes a una comunidad de entusiastas del whisky, sino que también desbloqueas una serie de beneficios exclusivos que harán de tu experiencia algo único.
              <br />
              Descubre lo Mejor del Mundo del Whisky.
              <br />
              Recibe noticias y artículos sobre las últimas tendencias y descubrimientos en el mundo del whisky. Desde ediciones limitadas hasta destilerías emergentes, estarás siempre al tanto de lo más interesante.
              Sé el primero en enterarte de nuestros eventos y catas exclusivas. Conoce a expertos, participa en degustaciones privadas y vive experiencias únicas que solo nuestros miembros pueden disfrutar.
            </p>
          </div>
          <div className='homeDiv'>
            <p>
              Compra con Confianza y Ahorra!
              <br />
              Disfruta de los mejores precios del mercado en una amplia selección de whiskys. Nuestros miembros registrados reciben ofertas exclusivas y descuentos que no encontrarás en ningún otro lugar.
              Sé el primero en acceder a nuevas llegadas y ediciones limitadas antes de que se agoten. Tu membresía te asegura un acceso prioritario a nuestros productos más codiciados.
              <br />
              Registrarse es rápido y sencillo. No te pierdas la oportunidad de formar parte de una comunidad apasionada por el whisky, y empieza a disfrutar de estos increíbles beneficios hoy mismo.
              ¡Únete a nosotros y eleva tu experiencia con el whisky a un nuevo nivel!
            </p>
          </div>

        </div>

        <div className='homeContenido'>
          <div className='homeImg'>
            <img src="./img/img_home2.jpg" alt="Home" />
          </div>
          <div className='homeCata'>
            <h3>Descubre los Matices de Johnnie Walker con Matias Jurisich</h3>
            <p>
              Sumérgete en el Arte del Whisky con una Experiencia Única. <br />
              Acompáñanos en un fascinante recorrido a través de los sabores y aromas de los whiskys de Johnnie Walker, guiado por el experto Matias Jurisich. En este video, Matias nos lleva a una degustación detallada de las icónicas etiquetas Red Label, Black Label, Gold Label, Green Label, 18 Años y Blue Label.
            </p>
            <p>
              Ver el video es una oportunidad única para aprender sobre la composición y las características distintivas de cada uno de estos whiskys, tanto sin agua como con agua. Descubre cuál es tu favorito y conoce en profundidad lo que hace a cada uno especial.
              <br />
              No te pierdas esta oportunidad de enriquecer tu conocimiento sobre Johnnie Walker y, después de disfrutar del video, visita nuestra tienda para encontrar estos magníficos whiskys a los mejores precios del mercado. ¡Tu próxima botella te está esperando!
            </p>
          </div>
          <div className='homeVideo'>
            <Link
              to="https://www.youtube.com/watch?v=S9ZoDl_FmzU"
              className='video'
              onClick={(e) => handleExternalLinkClick(e, 'https://www.youtube.com/watch?v=S9ZoDl_FmzU')}
            >
              Ver el video
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home