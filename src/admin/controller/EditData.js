import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Instance from "../../axios";
import { Authenticaton } from "../Authenticaton";
import { Header } from "../Header";

export function EditBook() {
  const params = useParams();
  const navigate = useNavigate();
  Authenticaton();

  const [selectedFile, setSelectedFile] = useState();

  const [myData, setMyData] = useState({
    // name: "",
    // author: "",
    // description: "",
    // price: "",
  });

  const getApiData = async () => {
    try {
      // const token = localStorage.getItem("accessToken");
      const response = await Instance.get(`/books/${params.data}`);

      console.log(response.data);
      setMyData(response.data);
    } catch (error) {
      console.log("Error" + error);
    }
  };

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setMyData({ ...myData, [name]: value });
  };
  useEffect(() => {
    getApiData();
  }, []);

  const updatedata = (e) => {
    e.preventDefault();
    // if (localStorage === undefined || localStorage === null) {
    //   navigate("/admin-login");
    //   alert("hehe");
    // } else {
    Instance.patch(`/books/${params.data}`, myData).then((res) => {
      console.log("@data", res);
      if (res.status === 200 || 201) {
        // alert("Edited successfully");
        toast.success("Updated", {
          position: "top-center",
          autoClose: 100,
        });
        // navigate("/admin");
        // } else if (res.status === 404) {
        //   navigate("/admin-login");
      } else {
      }
    });
    // }
  };
  const cancelupdate = () => {
    navigate("/admin");
  };

  return (
    <>
      <Header />
      <div className="container mt-5 justify-content-center">
        <h5>Dashboard / EditBook</h5>
        <div className="card w-75">
          <form onSubmit={updatedata}>
            <div className="card-body  editbook">
              <div className="form-group">
                <label for="exampleFormControlInput1">Book Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Book title.."
                  name="name"
                  value={myData.name}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Author Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Author name"
                  name="author"
                  value={myData.author}
                  onChange={handleInput}
                  required
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Price"
                  name="price"
                  value={myData.price}
                  onChange={handleInput}
                  required
                  min="50"
                  max="5000"
                />
                {/* <p id="editbook_price" className="text-danger"></p> */}
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                  value={myData.description}
                  onChange={handleInput}
                  required
                ></textarea>
                <br />
                <button className="btn btn-primary btn-rounded " type="submit">
                  Update
                </button>
                <button
                  className="btn btn-danger btn-rounded cancel "
                  type="button"
                  onClick={cancelupdate}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
