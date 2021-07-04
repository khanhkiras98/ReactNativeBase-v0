type Data = {
    
}
export function loginSuccess(token: string) {
    return {
        type: 'LOGIN_SUCCESS',
        payload: token
      }
  }