import client from "./config";
export let token = null;

export interface LoginRequest{
  login_id: string; 
  password: string;
  drg_store_id?: number;
}
export default {
  
  login(params: LoginRequest) {
    const url = `/auth/signin`;
    return client.post(url, params).then((response:any) => {
      token = response.data.access_token;
      return response;
    });
  },
  register(params: {
    store_name: string;
    phone_no: string;
    email: string;
    password: string;
    company_name: string;
    company_type: number;
    address: string;
  }) {
    const url = `/auth/signup`;
    return client.post(url, params).then((response:any) => {
      return response;
    });
  },
  verifyAccount(login_id: number, token: string) {
    const url = `auth/verify?login_id=${login_id}&token=${token}`;
    return client.get(url);
  },

  checkAccountExist: (login_id:string) => {
    const url = `auth/check/account?login_id=${login_id}`;
    return client.get(url);
  },

  confirmChangePassWord: (password:string, token:string) =>{
    const url = `auth/forgot-password?password=${password}&token=${token}`;
    return client.get(url);
  }
};
