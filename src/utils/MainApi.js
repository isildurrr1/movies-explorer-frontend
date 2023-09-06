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

  register(email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        password: `${password}`,
        email: `${email}`
      })
    })
      .then(this._checkResponse)
  }

}

// const token = localStorage.getItem('jwt');

export const authApi = new MainApi({
  baseUrl: '',
  headers: {
    'Content-Type': 'application/json'
  }
})