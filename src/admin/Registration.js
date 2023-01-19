import axios from "axios";
import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Instance from "../axios";

export function Registration() {
  // const[decodedToken, isExpired] = useJwt(token);
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userdata, [name]: value });
    validateInput(e);
  };
  const validateInput = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "confirmPassword":
          if (!value) {
            // stateObj[name] = "Please enter Confirm Password.";
          } else if (userdata.password && value !== userdata.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  useEffect(() => {}, []);
  const submitdata = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = userdata;

    Instance.post("/admin/register", {
      name,
      email,
      password,
    }).then((response) => {
      setUserData(response.data);
      // localStorage.setItem(token);
      console.log(response.status);
      if (response.status === 201) {
        alert("Success");
        navigate("/admin-login");
      }
    });
    // alert("Successsss");
  };
  return (
    <>
      <div className="row mt-8">
        <div className="col-md-4 offset-md-4">
          <div className="card text-white">
            <div className="card-body ">
              <form onSubmit={submitdata}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    className="form-control "
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    required
                    id="name"
                    name="name"
                    onChange={handleInput}
                    value={userdata.name}
                    // onBlur={validateInput}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control "
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                    name="email"
                    onChange={handleInput}
                    value={userdata.email}
                    // onBlur={validateInput}
                  />
                  {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control "
                    placeholder=" Enter Password"
                    required
                    minLength={8}
                    name="password"
                    id="pass"
                    onChange={handleInput}
                    value={userdata.password}
                    // onBlur={validateInput}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control "
                    placeholder="Enter password again"
                    required
                    id="confirm_passs"
                    name="confirmPassword"
                    onChange={handleInput}
                    value={userdata.confirmPassword}
                    onBlur={validateInput}
                  />
                  {error.confirmPassword && (
                    <span className="text-danger">{error.confirmPassword}</span>
                  )}
                </div>

                <NavLink to="/admin-login">Already a member</NavLink>
                <div>
                  <button
                    type="submit"
                    value="Submit"
                    className="btn btn-primary"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
