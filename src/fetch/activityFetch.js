import axios from "axios";
import Swal from "sweetalert2";

export const getAllActivities = async (cb) => {
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

export const removeActivity = async (id) => {
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
        let result = await axios({
          method: "DELETE",
          url: `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });

    console.log("delete success");
  } catch (error) {
    console.error(error);
  }
};

export const addActivity = async (data) => {
  console.log(data);
  try {
    let result = await axios({
      method: "POST",
      url: "https://todo.api.devcode.gethired.id/activity-groups",
      data: data,
    });

    Swal.fire("Add Brand", "Brand has been added", "success");
  } catch (e) {
    console.log(e);
  }
};

export const getOneActivity = async (id, cb) => {
  try {
    let result = await axios({
      method: "GET",
      url: `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
    });
    cb(result.data);
  } catch (e) {
    console.log(e);
  }
};

export const editActivity = async (id, data) => {
  try {
    let result = await axios({
      method: "PATCH",
      url: `https://todo.api.devcode.gethired.id/activity-groups/${id}`,
      data: data,
    });

    Swal.fire(
      "Edit brand " + id,
      "brand " + id + " has been edited",
      "success"
    );
  } catch (e) {
    console.log(e);
  }
};
