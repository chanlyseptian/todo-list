import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditActivityForm } from "../../components";

const EditActivityPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="container mx-auto px-12 md:px-64">
      <p
        className="text-xl mt-8 font-semibold hover:text-primary cursor-pointer"
        onClick={() => navigate(`/detail/${params.id}`)}
      >
        {" "}
        {"<"} Back
      </p>
      <div className="flex flex-col justify-center items-center my-12">
        <h1 className="text-3xl font-semibold ml-6 mb-12 ">Edit Aktivitas</h1>

        <EditActivityForm id={+params.id} activityTitle={params.title} />
      </div>
    </div>
  );
};

export default EditActivityPage;
