import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Instance from "../../axios";
import { Authenticaton } from "../Authenticaton";

import { Header } from "../Header";

export function AddBook() {
  // Authenticaton();

  const [selectedFile, setSelectedFile] = useState();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setBook({ ...book, [name]: value });
  };

  useEffect(() => {
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
  }, []);

  function submitdata(e) {
    e.preventDefault();
    const { name, author, description, price, image } = book;

    if (image > 1024 * 1024) {
      // alert("File cannot be more than 2MB");
      document.getElementById("addbook_img").innerHTML =
        "File cannot be more than 2MB";
    } else {
      const formData = new FormData();
      formData.append("cover", selectedFile);
      formData.append("name", name);
      formData.append("author", author);
      formData.append("description", description);
      formData.append("price", price);
      try {
        const token = localStorage.getItem("accessToken");
        console.log(token);
        Instance({
          method: "post",
          url: "/books",
          data: formData,
        }).then((response) => {
          setBook(response.data);

          console.log("@data", response);
          if (response.status === 200 || 201) {
            // alert("Added successfully");
            toast.success("Added", {
              position: "top-center",
              autoClose: 0,
            });
            console.log(response.data._id);

            navigate(`/editData/${response.data._id}`);
          }
        });
      } catch (error) {
        // console.log(error);
        alert(error);
      }
    }
  }
  const canceldata = () => {
    navigate("/admin");
  };

  return (
    <>
      <Header />
      <div className="container mt-4">
        <h5>Dashboard / AddBook</h5>
        <div className="card w-65">
          <form onSubmit={submitdata}>
            <div className="col-md-12 ">
              <div className="card-body">
                <div className="form-floating mb-3">
                  <input
                    required
                    type="text"
                    name="name"
                    className="form-control"
                    id="title"
                    placeholder="Book Title"
                    onChange={handleInput}
                    value={book.name}
                  />
                  <label for="floatingInput">Book Name </label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    type="text"
                    name="author"
                    className="form-control"
                    placeholder="Author Name"
                    onChange={handleInput}
                    value={book.authname}
                  />
                  <label for="floatingInput">Author Name</label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    required
                    type="text"
                    name="description"
                    className="form-control"
                    rows="2"
                    placeholder="Description"
                    onChange={handleInput}
                    value={book.desc}
                  ></textarea>
                  <label for="floatingInput">Description</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    required
                    type="number"
                    name="price"
                    className="form-control"
                    placeholder="Author Name"
                    onChange={handleInput}
                    value={book.price}
                    min="50"
                    max="5000"
                  />
                  <label for="floatingInput">Price</label>
                  <p id="addbook_price" className="text-danger"></p>
                </div>
                <div className="row mb-3">
                  <div className="col-6 ">
                    <label for="example-fileinput" className="form-label">
                      Thumbnail{" "}
                    </label>
                    <input
                      type="file"
                      name="file"
                      id="example-fileinput"
                      className="form-control"
                      onChange={(e) => setSelectedFile(e.target.files[0])}
                    />
                    <p id="addbook_img" className="text-danger"></p>
                  </div>
                </div>

                <button
                  type="submit"
                  value="Submit"
                  id="addbtn"
                  name="btnaddbookfdewertr"
                  className="btn btn-success btn-rounded"
                >
                  ADD
                </button>
                <button
                  type="button"
                  value="Submit"
                  onClick={canceldata}
                  id="addbtn"
                  name="btnaddbookfdewertr"
                  className="btn btn-danger btn-rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="addbook"></div>
      <ToastContainer />
    </>
  );
}
