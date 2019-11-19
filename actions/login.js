import axios from 'axios';
// export const login = (data) => {
//   return { type: 'LOGIN', payload: data };
// }

export const login = (credentials) => async (dispatch, getState) => {
  console.log(credentials.username);
  console.log(credentials.password);

  try {
    var response = await axios.post(`http://localhost:4200/api/login`,
    {
      email: credentials.username,
      password: credentials.password
    });
    localStorage.setItem('authToken', response.data.token);
    dispatch({type: 'LOGIN', payload: response.data});
  } catch (e){
    console.log("error occured", e);
  }

}