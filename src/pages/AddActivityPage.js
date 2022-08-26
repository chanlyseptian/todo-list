import React from "react";
import { useNavigate } from "react-router-dom";
const AddActivityPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addActivity");
  };

  return (
    <div className="container mx-auto px-12 md:px-64">
      <p className="text-xl mt-8 font-semibold hover:text-gray-600 cursor-pointer"
      onClick={() => navigate('/')}>
        {" "}
        {"<"} Back
      </p>
      <div className="flex flex-col justify-center items-center my-12">
        <h1 className="text-3xl font-semibold ml-6 mb-12 ">Tambah Aktivitas</h1>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="activity"
            >
              Nama Aktivitas
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="activity"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="hari"
            >
              Hari
            </label>
            <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="hari"
              type="date"
            />
          </div>
          <button className="bg-primary p-2 w-full text-white rounded-lg">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddActivityPage;
