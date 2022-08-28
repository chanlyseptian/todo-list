import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addActivity } from "../../fetch/activityFetch";

const AddActivityForm = () => {
  const [addData, setaddData] = useState({
    title: "New Activity",
    email: "yoga+1@skyshi.io",
  });
  const navigate = useNavigate();

  const submitHandler = () => {
    addActivity(addData);
    navigate("/");
  };

  return (
    <form className="bg-white shadow-md rounded-lg px-8 pt-6 pb-16  md:w-[550px] relative">
      <div className="mb-4">
        <h1 className="block text-gray-700 font-bold mb-2 text-lg">
          Tambah Aktivitas
        </h1>
        <hr className="my-5" />

        <label htmlFor="title" className="font-semibold text-sm">
          Nama Aktivitas
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-4"
          id="title"
          name="title"
          type="text"
          onChange={(e) => setaddData({ ...addData, title: e.target.value })}
          placeholder="Tambahkan nama aktivitas"
        />

        <hr className="my-2"/>
      </div>

      <button
        className="bg-primary p-2 w-1/3 right-7 absolute text-white rounded-full hover:bg-blue-500"
        onClick={submitHandler}
      >
        Simpan
      </button>
    </form>
  );
};

export default AddActivityForm;
