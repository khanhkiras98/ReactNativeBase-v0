import client from "./config";
export let token = null;

export interface LoginRequest{
  login_id: string; 
  password: string;

}

export default {
  
  login(params: LoginRequest) {
    const url = `/auth/signin`;
    return client.post(url, params).then((response:any) => {
      token = response.data.access_token;
      console.log('/////////////////////////////////////////////',token)
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


// const navigation = useNavigation();

// export const loginRequest = async (article: object) => {
//   try {
//     const baseURL= config.axiosConfig().baseURL
//     const response = await axios
//       .post(`${baseURL}/api/auth/signin`, article)
//     console.log(response.status)
//     gotoMain()
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       handleAxiosError(error);
//     } else {
//       handleUnexpectedError(error);
//     }
//   }
// }
// const gotoMain = () => {
//   navigation.navigate('Main')
// }
// const handleAxiosError = (error: object) => {
//   console.log(error)
//   alert('Thông tin đăng nhập không đúng')
// }
// const handleUnexpectedError = (error: object) => {
//   console.log(error)
// }
