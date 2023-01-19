import { Outlet } from "react-router-dom";
import { AllBoook } from "./AllBook";
import { Book } from "./Book";
import { Home } from "./Home";

export function NormalPage() {
  return (
    <>
      <AllBoook />
      {/*  used to indicate where the content for a particular route should be rendered. */}
      <Outlet />
    </>
  );
}
