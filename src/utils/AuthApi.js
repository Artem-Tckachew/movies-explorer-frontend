export const BASE__URL = 'https://artemtkachev.api.nomoredomains.monster';

function checkResponse(res) {
  if(res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}

export const register = ( email, password, name ) => {
  return fetch(`${BASE__URL}/signup`, {
   method: "POST",
   credentials: "include",
   headers: {
     "Content-Type": "application/json"
   },
   body: JSON.stringify({ email, password, name })
  })

  .then (res=>checkResponse(res))

}

export const authorize = ( email, password ) => {
  return fetch(`${BASE__URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(res =>checkResponse(res))

}
export const signOut = () => {
  return fetch(`${BASE__URL}/signout`, {
    method: 'DELETE',
    credentials: 'include',
  })
}

export const checkToken = () => {
  return fetch(`${BASE__URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
  }).then(res =>checkResponse(res))
};
