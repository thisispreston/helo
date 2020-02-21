const initialState = {
  user_id: 0,
  username: '',
  imageURL: '',
}

const GET_USER = 'GET_USER';
const LOGOUT = 'LOGOUT';

export function getUser(user_id, username, imageURL){
  return {
      type: GET_USER,
      payload: {
        user_id,
        username,
        imageURL,
      }
  }
}

export function logout(){
  return {
      type: LOGOUT,
      payload: null,
  }
}

export default function reducer(state = initialState, action){
  const {type, payload} = action;
  switch(type){
      case GET_USER:
          return {...state, user: payload}
          //{user: {}, user: {user_id: 1, user_email: 'email'}}
      case LOGOUT:
          return {
            ...state,
            user_id: 0,
            username: '',
            imageURL: '',
          }
          //return initialState
      default:
          return state;
  }
};
