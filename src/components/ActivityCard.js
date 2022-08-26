import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { removeActivity } from "../fetch/activityFetch";

const ActivityCard = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${data.id}`);
  };

  const getFormattedDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toDateString();
  };

  const handleDelete = (id) => {
    removeActivity(id);
  };

  useEffect(() => {
    navigate('/')
  }, [navigate]);

  return (
    <>
      <div className="w-52 h-52 md:w-64 md:h-64 rounded-lg bg-white shadow-lg p-5 ">
        <div className="px-6 py-4">
          <div
            className="font-bold text-base md:text-xl mb-12 md:mb-20 cursor-pointer hover:text-primary"
            onClick={handleClick}
          >
            {data.title}
          </div>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <span
            className="inline-block  rounded-full  text-sm"
            style={{ color: "#888888" }}
          >
            {getFormattedDate(data.created_at)}
          </span>
          <button onClick={() => handleDelete(+data.id)}>
            <RiDeleteBin6Line style={{ color: "#888888" }}></RiDeleteBin6Line>
          </button>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
