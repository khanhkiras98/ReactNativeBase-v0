export default {
  axiosConfig: () => {
    return {
      baseURL: "https://medlink-apiv2.ecomedic.vn/api",
      timeout: 20000,
      responseType: 'json'
    }
  },
  version: "1.8.7"
}