export const BASE__URL = 'https://artemtkachev.api.nomoredomains.monster';

function checkResponse(res) {
  if (res.ok) {
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
    .then(res => checkResponse(res))
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
    .then(res => checkResponse(res))
}

export const saveMovie = (
  country,
  director,
  duration,
  year,
  description,
  image,
  trailer,
  nameRU,
  nameEN,
  thumbnail,
  movieId
) => {
  return fetch(`${BASE__URL}/movies`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailer,
      nameRU,
      nameEN,
      thumbnail,
      movieId
    })
  })
    .then(res => checkResponse(res))
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
    .then(res => checkResponse(res))
}
