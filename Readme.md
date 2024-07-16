
El proyecto es un E-Commers de bebidas alcohólicas, más específicamente de Whiskys. En un inicio iba a ser de whiskys y cigarros, pero me atrase mucho con las clases y no logre hacer todo como me hubiera gustado.
Por el lado del FrontEnd, utilice React - Vite, me pareció la mejor elección por su versatilidad y rapidez de compilación a la hora de trabajar. Se le instalaron las librerías / tecnologías usuales: "react-router-dom" y "react-icons".
En este proyecto no quise utilizar  framework como Bootstrap, quise arriesgarme y hacerlo todo yo mismo, con los riesgos que eso implica.
Para el lado del BackEnd, utilice Node.Js claramente y Express, utilizando librerías / tecnologías como: "Nodemon", "Dotenv", "Bcrypt" y "JsonWebToken".
Para lo que fue la base de datos, me sentí más cómodo con MongoDB. 
Muchas funciones y armados son iguales o como los mostraste en clases porque fui realizando al menos el inicio del proyecto viendo los videos de las clases.
Me atrase muchísimos días en lo que fue la comunicación de mi FrontEnd con el BackEnd, lo que me dejo con muchísimos menos días para corregir algunos errores.
Errores detectados (estos errores aún están al entregar):
Mi BackEnd no informa al body cuando hace verificaciones de campos de completado, los realiza perfectamente y por Postman los envía excelente, pero una vez cargada la Web esto no ocurre, si por consola del navegador.
El último error que detecte justo antes de enviar el proyecto, es al cargar un producto nuevo, pero SOLAMENTE desde Vercel, ya que desplegando en desarrollo carga todo a la perfección.

En cuanto al contenido y diseño, como mencione antes, tuve varios problemas que me atrasaron mucho y no avance con el diseño como me hubiera gustado.
Ya que este proyecto está orientado a un día a día como desarrollador, implemente un tablero de Jira para ordenarme.

Algo que me di cuenta es que un día hago funciones y className con nombres en inglés y otros en español, sé que no es buena práctica, pero me iba a demorar mucho más en dejar todas las variables en inglés.

Para ir terminando, ante la duda de que algo no funcionara, te dejo por este medio (sé que no se debe hacer en un proyecto "real", por cuestiones claramente de seguridad) el contenido de mí .env, un usuario ya registrado y su correspondiente contraseña y los enlaces que obviamente debemos enviarte para la corrección.

Mil disculpas por el texto largo, también por no poder asistir a las últimas clases. Gracias por ser un buen profe y explicar muy bien, si nos va mal es porque no tenemos la práctica y/o experiencia y no por falta de un docente que enseñe bien, ya que lo hiciste perfecto a pesar de tener un rejunte de alumnos que veníamos de profesores que no tenían tu método de enseñanza.

PD.: Acéptame en LinkedIn.

Usuario: eze@admin.com
Password: 123456

.env:

PORT=4040
JWT_SECRET_KEY=clave-secreta
DB_USERNAME='admin'
DB_PASSWORD='xD5pjicMIsFBrXcd'
DB_NAME='BackEnd_TPfinal'

Link's del FrontEnd:
https://web-front-final.vercel.app
https://github.com/ErcegovichEzequiel/WebFrontFinal.git

Link's del BackEnd:
https://backend-mongodb-smoky.vercel.app
https://github.com/ErcegovichEzequiel/backend_mongodb.git


