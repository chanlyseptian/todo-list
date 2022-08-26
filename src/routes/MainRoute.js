import React from "react";
import { Routes, Route } from "react-router-dom";
import ListItemPage from "../pages/ListItemPage";
import Homepage from "../pages/Homepage";
import AddActivityPage from "../pages/AddActivityPage";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/addActivity" element={<AddActivityPage></AddActivityPage>}></Route>

        <Route path="/list" element={<ListItemPage></ListItemPage>}></Route>

      </Routes>
    </div>
  );
};

export default MainRoute;
