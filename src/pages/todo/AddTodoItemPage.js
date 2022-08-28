import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddListItemForm } from "../../components";

const AddTodoItemPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-12 md:px-64">
      <p
        className="text-xl mt-8 font-semibold hover:text-gray-600 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        {" "}
        {"<"} Back
      </p>
      <div className="flex flex-col justify-center items-center my-12">
        <h1 className="text-3xl font-semibold ml-6 mb-12 ">Add Todo Item</h1>
        <AddListItemForm id={+params.id} />
      </div>
    </div>
  );
};

export default AddTodoItemPage;
