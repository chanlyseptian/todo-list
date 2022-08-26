import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ActivityCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/list");
  };

  return (
    <>
      <div
        className="w-52 h-52 md:w-64 md:h-64 rounded-lg bg-white shadow-lg p-5 hover:bg-gray-50 cursor-pointer"
        onClick={handleClick}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-base md:text-xl mb-12 md:mb-20">
            {data.title}
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <span
            className="inline-block  rounded-full  text-sm"
            style={{ color: "#888888" }}
          >
            {data.created_at}
          </span>
          <AiTwotoneDelete style={{ color: "#888888" }}></AiTwotoneDelete>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
