import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Router, useParams } from "react-router-dom";
import Instance from "../axios";
import { BookDes } from "./BookDescription";

export function Book() {
  const [book, setBook] = useState([]);
  const getbook = async () => {
    try {
      const response = await Instance.get("/books");
      console.log(response);
      setBook(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getbook();
  }, []);

  if (book != undefined) {
    return (
      <>
        <div className="row">
          {/* use map  function to iterate over an array of book objects*/}
          {book.map((currElem) => {
            return (
              <>
                <div className="col-md-3">
                  <div className="card mb-3">
                    <NavLink to={`/BookDescription/${currElem._id}`}>
                      <div className="card-body">
                        <img
                          alt="bookpic"
                          src={`http://127.0.0.1:5000/api/v1/books/${currElem.cover}`}
                          // src={currElem.cover}
                          className="card_img w-100 "
                        />
                        <div className="card_info">
                          <h6 className="card_title">{currElem.name}</h6>
                          <span className="card_category">
                            <span className="gen">Author:</span>
                            {currElem.author}
                          </span>

                          <div className="diiv">
                            <p className="genre">
                              <span className="gen">Price:</span>
                              {currElem.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  }
}
