import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Instance from "../axios";

export function BookDes() {
  const params = useParams();

  const [book, setBook] = useState([]);
  const getbook = async () => {
    try {
      const response = await Instance.get(`/books/${params.id}`);
      console.log(response);
      setBook(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getbook();
  }, []);

  // if(book != undefined){
  return (
    <>
      <div className="bookdesc">
        <div className="row">
          <div className="col-3">
            <img
              src={`http://127.0.0.1:5000/api/v1/books/${book.cover}`}
              class="img-fluid"
              alt="book image"
            />
            <h3 className="card_title"></h3>
            <span className="card-category">
              <span className="gen"></span> {book.name}{" "}
            </span>
            <br />
            <span className="card-category">
              <span className="gen">Author:</span> {book.author}
            </span>
            <div className="diiv">
              <h6 className="genre ">
                <span className="gen">Price:</span>
                <span className="gen">{book.price}</span>
              </h6>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="desc ">
                <p>
                  <span className="gen"></span>
                  <span>{book.description}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
