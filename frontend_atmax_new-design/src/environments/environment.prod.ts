export const environment = {
  production: true
};

const endpoint = "http://207.180.235.195:8080/";
export const apiEndPoint = (path: string) => `${endpoint}/${path}`