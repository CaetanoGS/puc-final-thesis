import axios from "axios";

export const API_URL = "http://localhost:3000/api/";


const login = async (username, password) => {
    const response = await axios
        .post(API_URL + "authenticate/", {
            username,
            password,
        });
    if (response.data && response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
    }
    return response.data;
  };


const AuthService = {
    login,
  }
  
  export default AuthService;