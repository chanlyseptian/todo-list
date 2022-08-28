import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  ListItemPage,
  Homepage,
  AddActivityPage,
  EditActivityPage,
  AddTodoItemPage,
  EditTodoPage,
} from "../pages/";

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
          path="/editActivity/:id/:title"
          element={<EditActivityPage></EditActivityPage>}
        ></Route>
        <Route
          path="/addItem/:id"
          element={<AddTodoItemPage></AddTodoItemPage>}
        ></Route>

        <Route
          path="/editTodo/:groupId/:id"
          element={<EditTodoPage></EditTodoPage>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
