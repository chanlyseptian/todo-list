import React from "react";
import { Routes, Route } from "react-router-dom";
import ListItemPage from "../pages/ListItemPage";
import Homepage from "../pages/Homepage";
import AddActivityPage from "../pages/AddActivityPage";
import EditActivityPage from "../pages/EditActivityPage";
import AddTodoItemPage from "../pages/AddTodoItemPage";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/addActivity"
          element={<AddActivityPage></AddActivityPage>}
        ></Route>

        <Route
          path="/detail/:id"
          element={<ListItemPage></ListItemPage>}
        ></Route>
        <Route
          path="/editActivity/:id"
          element={<EditActivityPage></EditActivityPage>}
        ></Route>
        <Route
          path="/addItem"
          element={<AddTodoItemPage></AddTodoItemPage>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
