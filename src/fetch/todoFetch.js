import axios from "axios";
import Swal from "sweetalert2";

export const getTodos = async (cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: "https://todo.api.devcode.gethired.id/activity-groups?email=yoga%2B1%40skyshi.io",
    });
    cb(result.data);
  } catch (error) {
    console.error(error);
  }
};

export const addTodo = async (data) => {
  try {
    await axios({
      method: "POST",
      url: "https://todo.api.devcode.gethired.id/todo-items",
      data: data,
    });
    Swal.fire("Success", "Todo Item has been added", "success");
  } catch (e) {
    console.log(e);
  }
};

export const editCheckboxTodo = async (id, data) => {
  try {
    await axios({
      method: "PATCH",
      url: `https://todo.api.devcode.gethired.id/todo-items/${id}`,
      data: data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const removeTodo = async (id) => {
  try {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios({
          method: "DELETE",
          url: `https://todo.api.devcode.gethired.id/todo-items/${id}`,
        });

        Swal.fire("Deleted!", "Todo item has been deleted.", "success");
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const detailTodo = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: `https://todo.api.devcode.gethired.id/todo-items/${id}`,
    });
    cb(result.data.title);
  } catch (error) {
    console.error(error);
  }
};

export const editTodoItem = async (id, data) => {
  try {
    await axios({
      method: "PATCH",
      url: `https://todo.api.devcode.gethired.id/todo-items/${id}`,
      data: data,
    });
    Swal.fire("Success ", "Item has been edited", "success");
  } catch (e) {
    console.log(e);
  }
};
