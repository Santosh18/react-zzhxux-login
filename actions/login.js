import axios from 'axios';
// export const login = (data) => {
//   return { type: 'LOGIN', payload: data };
// }

export const login = (credentials) => async (dispatch, getState) => {
  console.log(credentials.username);
  console.log(credentials.password);

  try {
   let params = {
      email: credentials.username,
      password: credentials.password
    }
    console.log('params ',params);
    var response = await axios.post(`http://localhost:4200/api/login?email=${params.email}&password=${params.password}`);
    console.log('res', response.data.data.token);
    localStorage.setItem('authToken', `Bearer ${response.data.data.token}`);
    dispatch({type: 'LOGIN', payload: response.data});
  } catch (e){
    console.log("Error occured", e);
  }

}