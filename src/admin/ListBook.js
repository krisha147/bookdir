import Instance from "../axios";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import { Authenticaton } from "./Authenticaton";
import { UpdateToken } from "./UpdateToken";
import { Header } from "./Header";
import { DeleteBook } from "./controller/DeleteBook";
import { Search } from "./Search";

export function Boook(posts) {
  const params = useParams();
  const [book, setBook] = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  // const [selectedValue, setSelectedValue] = useState();

  const navigate = useNavigate();
  //To navigate   in login if there is no token...
  Authenticaton();

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };
  // console.log(selectedValue);
  // const itemsPerPage = selectedValue;
  const itemsPerPage = 4;
  console.log(itemsPerPage);

  // const totalItem = 13;

  //To fetch the book froom api
  const getbook = async (page) => {
    try {
      var q = document.getElementById("searchvalue").value;
      const response = await Instance.get(`/books?name=${q}`);
      console.log(response.data);
      setBook(response.data);
      console.log(setBook);
      console.log(book);
    } catch (error) {
      console.log("error", error);
    }
  };

  //For deleting book
  const remove = (_id) => {
    if (window.confirm("Are you sure you want to delete?") == true) {
      Instance.delete(`/books/${_id}`, {}).then(({ data }) => {
        console.log(data);
        console.log("@data", data);
        if (data.status === 200 || 201) {
          // alert("Deleted successflly");
          // navigate("/admin");
          document.getElementById("tr_" + _id).classList.add("d-none");
        }
      });
    } else {
    }
  };
  console.log(book);
  const currentUrl = window.location.href;
  console.log(currentUrl);

  //for pagination

  console.log(book);
  const handlePageChange = (page) => {
    setCurrentPage(page);

    const startIndex = (page - 1) * itemsPerPage;
    setData(book.slice(startIndex, startIndex + itemsPerPage));
    // <NavLink to={`admin?page=${page}`}></NavLink>;
    // window.history.pushState(
    //   {},
    //   "",
    //   `${currentUrl.split("?")[0]}?page=${page}`
    // );
  };
  useEffect(() => {
    getbook();
  }, []);

  useEffect(() => {
    if (book?.length > 0) {
      setData(book.slice(0, itemsPerPage));
    }
  }, [book]);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams);
    const page = queryParams.get("page");
    handlePageChange(page);
    if (page === null) {
      setData(book.slice(0, 4));
    }
  }, [book]);

  console.log("@data", book);

  if (book != undefined) {
    return (
      <>
        {/* <Header /> */}

        <div className="container mt-5">
          <h4>Dashboard / List Book</h4>
          <div className="card p-3 w-100 ">
            <div className="row">
              <div className="col-md-8">
                <NavLink to="/admin-addBook">
                  <button className="btn btn-light">AddBook</button>
                </NavLink>
              </div>
              <div className="col-md-4 mt-2 d-flex justify-content-end ">
                {/* <Search /> */}
                <input
                  type="search"
                  id="searchvalue"
                  className="form-control border-0 ps-3"
                  placeholder="Type here..."
                  onChange={getbook}
                />
              </div>
            </div>
            <div className="card-body">
              <table className="table dt-responsive nowrap w-100">
                <thead>
                  <tr>
                    <th>BookName</th>
                    <th>Author</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>

                {data.map((currElem) => {
                  return (
                    <>
                      <tbody>
                        <tr id={"tr_" + currElem._id}>
                          <NavLink to={`/editData/${currElem._id}`}>
                            <td>{currElem.name}</td>
                          </NavLink>
                          <td>{currElem.author}</td>
                          <td>{currElem.price}</td>
                          <td>
                            <NavLink to={`/editData/${currElem._id}`}>
                              <i className="fa-solid fa-pen 2fa"></i>
                            </NavLink>

                            {/* <NavLink to={`/delete/`}> */}
                            <span onClick={() => remove(currElem._id)}>
                              <i className="fa-solid fa-trash p-2"></i>
                            </span>
                            {/* </NavLink> */}
                          </td>
                        </tr>
                      </tbody>

                      {/* </NavLink> */}
                    </>
                  );
                })}
              </table>
              <div className="d-flex row">
                <div className="col-md-8 d-flex">
                  {Array.from(
                    { length: Math.ceil(book.length / itemsPerPage) },
                    (x, i) => (
                      <>
                        <NavLink to={`/admin?page=${i + 1}`}>
                          {/* <Link to="?page=${i+1}`"> */}
                          <button
                            href=""
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className="btn btn-rounded "
                            id="page_btn"
                          >
                            {i + 1}
                            {/* </button> */}
                            {/* console.log(id); */}
                          </button>
                          {/* </Link> */}
                        </NavLink>
                      </>
                    )
                  )}
                </div>
                {/* <div className="col-md-3 mt-2">
                  <label>
                    Book per page:
                    <select value={selectedValue} onChange={handleChange}>
                      <option value="2">2</option>
                      <option value="4">4</option>

                      <option value="8">8</option>
                      <option value="12">12</option>
                      <option value="16">16</option>
                      <option value="20">20</option>
                    </select>
                  </label>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

{
}
