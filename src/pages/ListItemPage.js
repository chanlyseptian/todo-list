import React from "react";
import { useNavigate } from "react-router-dom";
import IllustrationAdd from "../components/IllustrationAdd";

const ListItemPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto px-12 md:px-64">
      <div className="flex justify-between mt-12">
        <h1
          className="text-3xl font-semibold ml-6 cursor-pointer hover:text-gray-600"
          onClick={handleClick}
        >
          {" "}
          {"<"} New Activity
        </h1>
        <button className="rounded-full bg-primary py-3 px-6 text-white hover:bg-blue-600">
          + Tambah
        </button>
      </div>
      <div className="flex justify-center mt-10 ">
        <IllustrationAdd />
      </div>
    </div>
  );
};

export default ListItemPage;
