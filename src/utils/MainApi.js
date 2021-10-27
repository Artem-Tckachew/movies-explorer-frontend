export const BASE__URL = 'https://artemtkachev.api.nomoredomains.monster';

function checkResponse(res) {
  if(res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}

  export const getUserInfo = () => {
    return fetch(`${BASE__URL}/users/me`,
    {
      method: "GET",
      credentials: 'include',
    })
    .then(res => checkResponse(res))
    }

 export const getMovies = () => {
    return fetch(`${BASE__URL}/movies`, {
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(res =>checkResponse(res))
  }

 export const patchProfileInfo = (name, email) => {
    return fetch(`${BASE__URL}/users/me`, {
      method: "PATCH",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email })
    })
    .then(res =>checkResponse(res))
  }

 export const saveMovie = (movie) => {
    const newOptions = {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify({
        country: movie.country || 'null',
        director: movie.director || 'null',
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink
          ? movie.trailerLink.startsWith('https')
            ? movie.trailerLink
            : 'https://www.youtube.com'
          : 'https://www.youtube.com',
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id.toString(),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || 'null',
      }),
    };
    return fetch(`${BASE__URL}/movies`, newOptions).then(res =>checkResponse(res))
  }

 export const removeMovie = (id) => {
    return fetch(`${BASE__URL}/movies/${id}`, {
      method: "DELETE",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
    }
    )
    .then(res =>checkResponse(res))
  }
