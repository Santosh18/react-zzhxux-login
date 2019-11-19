
export const loginReducer = (state = [], action) => {
  console.log(action.type);
  if(action.type === 'LOGIN') {
    return [...state, action.payload]
  }
  return state
}