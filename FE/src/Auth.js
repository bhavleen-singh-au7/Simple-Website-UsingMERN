import { API } FROM '../../backend';
// API means -> http://localhost:2020/api/

export const signup = user => {
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

export const signin = user => {
  return fetch(`${API}/signin`, {
    method: 'POST',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => {
      return res.json();
    })
    .catch(err => console.log(err));
};

// This function set token to user browser
export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

// Will remove token first then by line 48 hit signout route
export const signout = next => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();

    return fetch(`${API}/signout`, {
      method: 'GET'
    })
      .then(res => console.log('Sign Out Success'))
      .catch(err => console.log(err));
  }
};

// To validate user is signin or not -> return boolean value
export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }

  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};