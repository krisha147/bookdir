import { Outlet } from "react-router-dom";
import { Boook } from "./ListBook";
import { EditBook } from "./controller/EditData";
import { Header } from "./Header";

export function MainPage() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
