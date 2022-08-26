import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addActivity } from "../fetch/activityFetch";

const AddActivityForm = () => {
  const [addData, setaddData] = useState({
    title: "",
    email: "yoga+1@skyshi.io",
  });
  const navigate = useNavigate();

  const submitHandler = () => {
    addActivity(addData);
    navigate('/')
  };


  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">
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
          onChange={(e) => setaddData({ ...addData, title: e.target.value })}
        />
      </div>

      <button
        className="bg-primary p-2 w-full text-white rounded-lg hover:bg-blue-500"
        onClick={submitHandler}
      >
        Add
      </button>
    </form>
  );
};

export default AddActivityForm;
