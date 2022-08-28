import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editActivity } from "../../fetch/activityFetch";

const EditActivityForm = ({ id, activityTitle }) => {
  const [activity, setEditActivity] = useState({
    title: activityTitle,
  });
  const navigate = useNavigate();

  const submitHandler = (e) => {
    if (activity.title === "") {
      e.preventDefault();
      alert("tidak boleh kosong");
    } else {
      editActivity(+id, activity);
      navigate(`/detail/${id}`);
    }
  };

  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96"
      onSubmit={(e) => submitHandler(e)}
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Nama Aktivitas
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          name="title"
          type="text"
          value={activity.title}
          onChange={(e) =>
            setEditActivity({ ...activity, title: e.target.value })
          }
        />
        <input
          type="submit"
          value="Submit"
          className="bg-primary p-2 w-full text-white rounded-lg hover:bg-blue-500 mt-5 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default EditActivityForm;
