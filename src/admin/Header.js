import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Instance from "../axios";
import { Authenticaton } from "./Authenticaton";

export function Header() {
  const navigate = useNavigate();
  Authenticaton();
  const logout = () => {
    const token = localStorage.getItem("accessToken");
    const reftoken = localStorage.getItem("refreshToken");
    const data = { refreshToken: reftoken };
    console.log(reftoken);
    Instance.post(
      "/admin/logout",
      data,

      {}
    ).catch((err) => {
      console.log(err);
    });

    localStorage.clear();
    Cookies.remove("CurrentURL");

    navigate("/admin-login");
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h6">Krisha</span>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
      </nav>
    </>
  );
}
