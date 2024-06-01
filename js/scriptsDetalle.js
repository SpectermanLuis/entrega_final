document.addEventListener("DOMContentLoaded", function() {

    const queryString = location.search
    const params = new URLSearchParams(queryString)
    const movieId = params.get("id")

    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?`;
    
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjEyYWE3N2JjZGU2YTAyYTRiYzk2ODY5ZTlmZDFmZCIsInN1YiI6IjY2MzE3MGNmZDE4NTcyMDEyNTMzN2MxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rDShKHx_I3FA1YZx30JRIcgNk1eXV3BI6m9eaLfx_7o'
        }
      };

    fetch(apiUrl,options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
          document.getElementById('header').style.backgroundImage = `url('https://image.tmdb.org/t/p/original${data.backdrop_path}')`;
            document.getElementById('title').innerText = data.title;
            document.getElementById('tagline').innerText = data.tagline;
            document.getElementById('poster').src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
            document.getElementById('overview').innerText = data.overview;
            document.getElementById('genres').innerText = data.genres.map(genre => genre.name).join(', ');
            document.getElementById('release_date').innerText = data.release_date;
            document.getElementById('runtime').innerText = data.runtime;
            document.getElementById('language').innerText = data.spoken_languages.map(lang => lang.english_name).join(', ');
            document.getElementById('country').innerText = data.production_countries.map(country => country.name).join(', ');
            document.getElementById('production_companies').innerText = data.production_companies.map(company => company.name).join(', ');
            document.getElementById('imdb_link').innerText = data.imdb_id;
            document.getElementById('imdb_link').href = `https://www.imdb.com/title/${data.imdb_id}`;
            document.getElementById('vote_average').innerText = data.vote_average;
            document.getElementById('vote_count').innerText = data.vote_count;
            document.getElementById('recaudacion').innerText = data.revenue;
            document.getElementById('homepage').innerText = "Sitio Oficial";
            document.getElementById('homepage').href = data.homepage;
          })
        .catch(error => console.error('Error', error));
});
