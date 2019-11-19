import axios from 'axios';
export const login = (data) => {
  return { type: 'LOGIN', payload: data };
}

export const login = (credentials) => async (dispatch, getState) => {
  
  var response = await axios.post(`http://localhost:4200/api/login`,{
    email: credentials.username,
    password: credentials.password
  });
  dispatch({type: 'LOGIN', payload: data});
}