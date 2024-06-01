let datosObtenidos = {};
// let tarjetasContenedor = document.querySelector("#contenedor_tarjetas");
let peliculasContenedor = document.querySelector("#tendenciasContainer");

let datosObtenidosAclamadas = {};
// let tarjetasContenedor = document.querySelector("#contenedor_tarjetas");
let aclamadasContenedor = document.querySelector("#aclamadasContainer");


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjEyYWE3N2JjZGU2YTAyYTRiYzk2ODY5ZTlmZDFmZCIsInN1YiI6IjY2MzE3MGNmZDE4NTcyMDEyNTMzN2MxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rDShKHx_I3FA1YZx30JRIcgNk1eXV3BI6m9eaLfx_7o'
    }
  };
  
 /*  fetch('https://api.themoviedb.org/3/authentication', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err)); */

    let paginaActual = 1; // Inicialmente la página actual es 1

    traerDatosTendencia(paginaActual);

    traerDatosAclamadas(paginaActual);
    
    document.querySelector('.boton_siguiente').addEventListener('click', () => {
        paginaActual++;
        traerDatosTendencia(paginaActual); // Actualiza los datos de tendencia con la página siguiente
    });
    
    document.querySelector('.boton_anterior').addEventListener('click', () => {
        if (paginaActual > 1) {
            paginaActual--;
            traerDatosTendencia(paginaActual); // Actualiza los datos de tendencia con la página anterior
        }
    });
    


    function traerDatosPeliculaPorId(id) {
      // Obtener datos desde la api (url)
      // Procesar segun que pagina este activada

      fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then((response) => response.json())
        .then((datosDetalle) => {
          //datosObtenidos = datosApi.results;
          console.log(datosDetalle);

        })
        .catch((error) => console.log(error));
    }
    

    function traerDatosTendencia(pagina) {
      // Obtener datos desde la api (url)
      // Procesar segun que pagina este activada

      fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${pagina}`, options)
      .then((response) => response.json())
        .then((datosApi) => {
          datosObtenidos = datosApi.results;
          console.log(datosObtenidos);

          crearMostrarTarjetas(datosObtenidos, peliculasContenedor);
        })
        .catch((error) => console.log(error));
    }
    



    function traerDatosAclamadas(pagina) {
      // Obtener datos desde la api (url)
      // Procesar segun que pagina este activada

      fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${pagina}`, options)
      .then((response) => response.json())
        .then((datosApi) => {
          datosObtenidosAclamadas = datosApi.results;
          console.log(datosObtenidosAclamadas);

          crearMostrarTarjetas(datosObtenidosAclamadas, aclamadasContenedor);
        })
        .catch((error) => console.log(error));
    }


    function crearMostrarTarjetas(arregloPeliculas, ubicacion) {
      let tarjetas = "";

      arregloPeliculas.forEach((pelicula) => {
        tarjetas += `<div class="tarjeta">
        <a href="../pages/detalle.html?id=${pelicula.id}"> 
        <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path} alt="Juego 1">
        </a>
        </div>`;
      });
    
      ubicacion.innerHTML = tarjetas;
    }
    
    
/*     fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${page}`, options)
        .then(response => response.json())
        .then((datosApi) => console.log(datosApi))
        .catch(err => console.error(err));


        fetch('https://api.themoviedb.org/3/genre/movie/list', options)
        .then(response => response.json())
        .then((generos) => console.log(generos))
        .catch(err => console.error(err));         */