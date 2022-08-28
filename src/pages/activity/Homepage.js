import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Illustration, ActivityCard } from "../../components";
import { getAllActivities } from "../../fetch/activityFetch";

const Homepage = () => {
  const [activity, setActivity] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/addActivity");
  };

  useEffect(() => {
    getAllActivities((result) => setActivity(result));
  });

  const renderCard = () => {
    return (activity.data || []).map((data, index) => {
      return (
        <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <ActivityCard key={index} data={data}></ActivityCard>
        </div>
      );
    });
  };

  return (
    <div className="container mx-auto px-10 md:px-12 2xl:px-64">
      <div className="flex justify-between mt-12 mb-10">
        <h1 className="text-3xl font-semibold ml-1">Activity</h1>
        <button
          className="rounded-full bg-primary py-3 px-6 text-white hover:bg-blue-600"
          onClick={handleClick}
        >
          + Tambah
        </button>
      </div>

      {activity.total !== 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {renderCard()}
        </div>
      ) : (
        <div className="flex justify-center mt-10 ">
          <Illustration />
        </div>
      )}
    </div>
  );
};

export default Homepage;
