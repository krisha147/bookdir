import Cookies from "js-cookie";

import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

export function Authenticaton() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");
  console.log(token);
  if (token === undefined || token === null) {
    navigate("/admin-login");
  }
  const reftoken = localStorage.getItem("refreshToken");
  console.log(reftoken);
  if (reftoken === undefined || reftoken === null) {
    navigate("/admin-login");
  }
  const location = useLocation();
  console.log(location);
  console.log(location.pathname);
  const locationPath = location.pathname;
  // console.log(locationPath);

  Cookies.set("CurrentURL", locationPath);
  const example = Cookies.get("CurrentURL");
  console.log(example);

  // localStorage.setItem("pathname", location.hash);
  // const [cookies, setCookies] = useCookies();
  // const handle = () => {
  //   setCookies("path", { path: "/" });
  // };

  return <></>;
}
