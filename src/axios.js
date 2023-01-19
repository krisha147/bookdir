import axios from "axios";

import jwtDecode from "jwt-decode";
import {
  unstable_HistoryRouter,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Authenticaton } from "./admin/Authenticaton";
import { UpdateToken } from "./admin/UpdateToken";

const acctoken = localStorage.getItem("accessToken");
const Instance = axios.create({
  baseURL: "http://127.0.0.1:5000/api/v1",
});

Instance.interceptors.request.use(
  (response) => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    //sending token in header
    response.headers["Authorization"] = "Bearer " + token;

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Instance.interceptors.response.use(
  (res) => {
    return res;
  },

  async (err) => {
    const originalResponse = err.response;
    console.log(originalResponse);

    // if access Token was expired
    if (err.response.status === 401) {
      //calling api for new access token
      const reftoken = localStorage.getItem("refreshToken");
      console.log(reftoken);
      Instance.post("/admin/token", {
        refreshToken: reftoken,
      }).then((response) => {
        localStorage.setItem("accessToken", response.data.accessToken);
        console.log(response.data.accessToken);
        const accToken = localStorage.getItem("accessToken");
        console.log(accToken);
        response.headers["Authorization"] = "Bearer " + acctoken; // for Spring Boot back-end
      });
    } else if (err.response.data.msg === "The refresh token has expired") {
      localStorage.clear();
      window.location.reload();
      // const navigate = useNavigate();
      // navigate("/admin-login");
      // const location = useLocation();
      // console.log(location);
      // console.log(location.pathname);
    } else {
    }
    return Promise.reject(err);
  }
);

export default Instance;
