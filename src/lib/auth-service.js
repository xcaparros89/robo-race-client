import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }

  signup({ username, password }) {
    return this.auth
      .post("/auth/signup", { username, password })
      .then(({ data }) => data);
  }

  login({ username, password }) {
    return this.auth
      .post("/auth/login", { username, password })
      .then(({ data }) => {console.log(data, 'aqui'); return data});
  }

  guest(username) {
    console.log(username)
    return this.auth
      .post("/auth/guest", {username})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post("/auth/logout", {}).then(({ data }) => data);
  }

  me() {
    return this.auth.get("/auth/me").then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
