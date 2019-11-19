import axios from 'axios';
export const login = (data) => {
  return { type: 'LOGIN', payload: data };
}