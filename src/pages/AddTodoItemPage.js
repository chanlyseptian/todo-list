import React from "react";
import { useNavigate } from "react-router-dom";
import AddActivityForm from "../components/AddActivityForm";

const AddTodoItemPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addActivity");
  };

  return (
    <div className="container mx-auto px-12 md:px-64">
      <p
        className="text-xl mt-8 font-semibold hover:text-gray-600 cursor-pointer"
        onClick={() => navigate("/")}
      >
        {" "}
        {"<"} Back
      </p>
      <div className="flex flex-col justify-center items-center my-12">
        <h1 className="text-3xl font-semibold ml-6 mb-12 ">Tambah List Item</h1>

        <AddActivityForm />
      </div>
    </div>
  );
};

export default AddTodoItemPage;
