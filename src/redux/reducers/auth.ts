import { AnyAction, createSlice } from "@reduxjs/toolkit";
import Types from "../types";

type ActionType = {
  type: string
  payload: AnyAction
};

interface InitState {
  username: string
  password: string
  token: string | null
}

const initialState : InitState = {
  username: "",
  password: "",
  token: null
}

// const auth = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginSuccess(state, action) {
//       state.token = action.payload.token
//     }
//   }
// })
// const { loginSuccess } = auth.actions

interface CounterState {
  username: string
  password: string
  token: string | null
}

// const authReducer = (state = initialState, action: AnyAction) => {
//   const { type, payload } = action;
//   switch (type) {
//     case Types.LOGIN: {
//       return {
//         ...state,
//         isLogin: payload,
//       };
//     }
//     default:
//       return state;
//   }
// }

function productReducer(state = initialState, action: ActionType) {
  const payload = action.payload
  switch (action.type) {
    case 'LOGIN_SUCCESS': 
      return  {
        ...state, 
        token: payload,
      };
    default:
      return state
      
  }
}


// export default authReducer
export default productReducer
