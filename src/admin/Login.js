import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Instance from "../axios";
import { UpdateToken } from "./UpdateToken";

export const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    // console.log(value);
    // let regEmail =
    //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (!regEmail.test(value)) {
    //   console.log("invalid email");
    //   document.getElementById("email_login").classList.add("is-invalid");
    //   document.getElementById("errmsg").innerHTML = "Type valid email...";
    // } else {
    //   console.log("valid email");
    //   document.getElementById("errmsg").innerHTML = "";
    //   document.getElementById("email_login").classList.remove("is-invalid");
    // }
    setUser({ ...user, [name]: value });
  };
  useEffect(() => {}, []);

  const submitdata = (e) => {
    e.preventDefault();
    const { email, password } = user;
    // if (email != " (/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$") {
    //   alert("Email is not valid");
    // } else if (email == "") {
    // } else if (password == "") {
    //   alert("Enter password");
    // } else {
    Instance.post("/admin/login", {
      email,
      password,
    })
      .then((response) => {
        setUser(response.data);
        // console.log(response.data.status);
        console.log(response.status);
        UpdateToken(response.data.accessToken, response.data.refreshToken);
        if (response.status == 200) {
          // alert("Login");
          document.getElementById("login_msg").innerHTML = "Logging In";
          setTimeout(() => {
            // navigate("/admin");
            // console.log();
            const cookiedata = Cookies.get("CurrentURL");
            if (Cookies.get("CurrentURL")) {
              // alert(cookiedata);
              navigate(cookiedata);
            } else {
              // alert("nothing in cookie bro");
              navigate("/admin");
            }
          }, 1000);
        }
      })
      .catch((err) => {
        // alert(`${err.response.msg}`);
        console.log(err.response.data.status);
        console.log(err.response.data);
        console.log(err.response.data.msg);
        if (err.response.data.msg == "Invalid email adderss") {
          // alert("Invalid email address");
          document.getElementById("login_msg").innerHTML =
            "Invalid email address";
        } else if (err.response.data.msg == "Invalid Password") {
          // alert("Invalid password");
          document.getElementById("login_msg").innerHTML = "Invalid password";
        } else {
        }

        return console.log(err.response.data);
      });
    // }
  };
  return (
    <>
      <div className="row mt-8">
        <div className="col-md-4 offset-md-4">
          <div className="card text-white">
            <p className="text-danger pt-3 m-0 text-center" id="login_msg"></p>
            <div className="card-body">
              <form onSubmit={submitdata}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    // id="email_login"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleInput}
                    value={user.email}
                  />
                  <span id="errmsg" className="text-danger"></span>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder=" Enter Password"
                    required
                    name="password"
                    onChange={handleInput}
                    value={user.password}
                  />
                </div>

                <NavLink to="/admin-registration">
                  <p> Don't have a account?? </p>
                </NavLink>

                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                  // id="loginbtn"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
