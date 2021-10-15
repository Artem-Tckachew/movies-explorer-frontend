export const BASE_URL = 'https://artemtkachev.api.nomoredomains.monster';

class Api {
  constructor(options) {
    this._options = options;
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
    }).then(this._checkResponse);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      credentials: 'include',
    }).then(this._checkResponse);
  }

  patchProfileInfo(inputsValue) {
    const newOptions = {
      ...this._options,
      body: JSON.stringify(inputsValue),
      method: 'PATCH',
      headers: this._headers,
      credentials: 'include',
    };
    return fetch(`${this._baseUrl}/users/me`, newOptions).then(
      this._checkResponse
    );
  }

  saveMovie(movie) {
    const newOptions = {
      headers: this._headers,
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
    return fetch(`${this._baseUrl}/movies`, newOptions).then(
      this._checkResponse
    );
  }

  removeMovie(movieId) {
    const newOptions = {
      headers: this._headers,
      credentials: 'include',
      method: 'DELETE',
    };
    return fetch(`${this._baseUrl}/movies/${movieId}`, newOptions).then(
      this._checkResponse
    );
  }
}

export default new Api({
  baseUrl: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
