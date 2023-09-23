class MainApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        name: `${name}`,
        password: `${password}`,
        email: `${email}`
      })
    })
      .then(this._checkResponse)
  }

  login(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`
      })

    })
      .then(this._checkResponse)
  }

  checkToken(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
      .then(res => res.json())
      .then(data => data)
  }

  getProfileInfo() {
    this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
    })
      .then(this._checkResponse)
  }

  setProfileInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: `${data.name}`,
        email: `${data.email}`
      })
    })
      .then(this._checkResponse)
  }

  getMyMovies() {
    this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this.baseUrl}/movies`, {
      method: 'GET',
      headers: this.headers,
    })
      .then(this._checkResponse)
  }

  saveMovie(movie) {
    this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
      .then(this._checkResponse)
  }

  deleteMyMovie(_id) {
    this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return fetch(`${this.baseUrl}/movies/${_id}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(this._checkResponse)
  }
}

const token = localStorage.getItem('jwt');

export const mainApi = new MainApi({
  baseUrl: 'https://api.isildurrr1-diplom.nomoreparties.co',
  authorization: `Bearer ${token}`,
  headers: {
    'Content-Type': 'application/json'
  }
})