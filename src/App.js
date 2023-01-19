import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AllBoook } from "./components/AllBook";
import { BookDes } from "./components/BookDescription";
import { Search } from "./components/Search";
import { NoPage } from "./components/NoPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Book } from "./components/Book";
import { Registration } from "./admin/Registration";
import { EditBook } from "./admin/controller/EditData";
import { Boook } from "./admin/ListBook";
import { Home } from "./components/Home";
import { NormalPage } from "./components/NormalPage";
import { Login } from "./admin/Login";
import { AddBook } from "./admin/controller/AddBook";
import { DeleteBoook } from "./admin/controller/DeleteBook";
import { UpdateToken } from "./admin/UpdateToken";
import { Header } from "./admin/Header";
import { MainPage } from "./admin/Mainpage";
import { Forms } from "./admin/Form";
import { Pagination } from "./admin/pagination";
import { DisplayBook } from "./admin/displayBook";
import { Cookie } from "./admin/Cookie";
import { useEffect } from "react";
import { Authenticaton } from "./admin/Authenticaton";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* For admin  */}
          <Route path="admin-login" element={<Login />} />
          <Route path="admin-registration" element={<Registration />} />

          <Route path="admin" element={<MainPage />}>
            <Route index element={<Boook />} />
          </Route>

          {/* this is to define what parameter is coming in BookDescription page */}
          <Route path="editData/:data" element={<EditBook />} />
          <Route path="admin-addbook" element={<AddBook />} />

          <Route path="delete" element={<DeleteBoook />} />
          <Route path="controller" element={<UpdateToken />} />
          <Route path="form" element={<Forms />} />
          <Route path="pagination" element={<Pagination />} />
          <Route path="displaybook" element={<DisplayBook />} />
          <Route path="cookie" element={<Cookie />} />
          <Route path="*" element={<NoPage />} />
        </Routes>

        {/* Route for user  */}
        <Routes>
          <Route path="" element={<NormalPage />}>
            <Route index element={<Home />} />
            <Route path="home/" element={<Home />} />
            <Route path="book-directory/book" element={<Book />} />
          </Route>
          {/* this is to define what parameter is coming in BookDescription page */}
          <Route path="BookDescription/:id" element={<BookDes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
