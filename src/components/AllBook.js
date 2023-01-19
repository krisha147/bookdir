import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Outlet } from "react-router-dom";
import Instance from "../axios";

export function AllBoook() {
  const [search, setSearch] = useState([]);
  const getSearch = async () => {
    try {
      var q = document.getElementById("searchvalue").value;
      const response = await Instance.get(`/books?name=${q}`);
      // const result = await response.json();
      // console.log(result);
      setSearch(response.data);
    } catch (error) {
      console.log("Error" + error);
    }
  };
  useEffect(() => {
    // getSearch();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white z-index-3 py-3">
        <div className="container">
          <h4>Book Directory</h4>
          <ul>
            <NavLink to="/home">
              <li>Home</li>
            </NavLink>
            <NavLink to="book-directory/book">
              <li>Book</li>
            </NavLink>
          </ul>

          <div className="bg-white border-radius-lg d-flex me-2">
            <div>
              <input
                type="search"
                id="searchvalue"
                className="form-control border-0 ps-3"
                placeholder="Type here..."
                onChange={getSearch}
              />
              <div className="mt-2 card-body bg-white z-index-9999  m-0 position-absolute">
                <ul className="list-group">
                  {search?.map((currElem, i) => {
                    return (
                      <li className="list-group-item p-1" key={i}>
                        {console.log(currElem._id)}
                        <NavLink to={`/BookDescription/${currElem._id}`}>
                          {currElem.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
