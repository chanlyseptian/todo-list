import React, { useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { removeActivity } from "../../fetch/activityFetch";

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
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="w-52 h-52 md:w-40 md:h-auto lg:w-[220px] lg:h-[220px] xl:w-64 xl:h-64 rounded-lg bg-white shadow-lg p-5">
        <div className="px-6 py-4">
          <h5
            className="font-bold text-base md:text-xl mb-12 md:mb-20 cursor-pointer hover:text-primary hover:underline"
            onClick={handleClick}
          >
            {data.title}
          </h5>
        </div>
        <div className="mt-3 xl:mt-6 px-6 pt-4 pb-2 flex items-center justify-between">
          <span
            className="inline-block  rounded-full  text-sm"
            style={{ color: "#888888" }}
          >
            {getFormattedDate(data.created_at)}
          </span>
          <button onClick={() => handleDelete(+data.id)}>
            <span className="text-gray-400 hover:text-red-500">
              <RiDeleteBin6Line />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;
