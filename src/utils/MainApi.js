const BASE__URL = "http://localhost:3000";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res.status);
  }
}

export const signUp = (email, password, name) => {
  return fetch(`${BASE__URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password, name })
  })

    .then(res => checkResponse(res))
}

export const signIn = (email, password) => {
  return fetch(`${BASE__URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(res => checkResponse(res))
}

export const signOut = () => {
  return fetch(`${BASE__URL}/signout`, {
    method: 'DELETE',
    credentials: 'include',
  })
}

export const getUser = () => {
  return fetch(`${BASE__URL}/users/me`,
    {
      method: "GET",
      credentials: 'include',
    })
    .then(res => checkResponse(res))
}
