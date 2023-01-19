import { Route, Routes } from "react-router-dom";
import { AddBook } from "../admin/controller/AddBook";
import { Book } from "./Book";
import { BookDes } from "./BookDescription";
import { EditData } from "./EditData";
import { NoPage } from "./NoPage";
import { NormalPage } from "./NormalPage";
import { Login } from "../admin/Login";
import { Registration } from "../admin/Registration";
import { Home } from "./Home";
import { Boook } from "../admin/ListBook";
import { EditBook } from "../admin/controller/EditData";
import { MainPage } from "../admin/Mainpage";

export function Layout() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<NormalPage/>} /> */}
        {/* <Route path="Home" element={<Home/>}/> */}

        {/* <Route path ="Book/" element={<Book/>} /> */}
        {/* <Route path="BookDescription" element={<BookDes/>}/> */}

        {/* this is to define what parameter is coming in BookDescription page */}
        {/* <Route path="BookDescription/:id" element={<BookDes/>}/> */}

        {/* <Route path="AddBook" element={<AddBook/>}/>
                <Route path="Admin/" element={<Boook/>}/>

                <Route path="EditData/:data" element={<EditData/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="Registration" element={<Registration/>}/>
                <Route path="*" element = {<NoPage/>}/> */}
        {/* </Route> */}
      </Routes>
      {/* <Routes>
            <Route path="admin/" element={<MainPage/>}/>
            <Route path="/admin/book" element={<Boook/>}/>
            <Route path="/admin/edit" element={<EditBook/>}/>
            <Route path="AddBook" element={<AddBook/>}/>
            <Route path="EditData/:data" element={<EditBook/>}/>
            <Route path="Registration" element={<Registration/>}/>
            <Route path="Login" element={<Login/>}/>
 */}

      {/* <Route path="admin/Editbook/:data" element={<EditBook/>}/> */}

      {/* </Routes> */}
    </>
  );
}
