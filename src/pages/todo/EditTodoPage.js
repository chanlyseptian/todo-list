import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { detailTodo } from "../../fetch/todoFetch";
import { EditTodoForm } from "../../components";

const EditTodoPage = () => {
  const [todoTitle, setTitle] = useState();
  const [todoPriority, setPriority] = useState();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    detailTodo(+params.id, setTitle, setPriority);
  }, [params.id]);

  return (
    <div className="container mx-auto px-12 lg:px-64">
      <p
        className="text-xl mt-8 font-semibold hover:text-gray-600 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        {" "}
        {"<"} Back
      </p>
      <div className="flex flex-col justify-center items-center my-12">
        <h1 className="text-3xl font-semibold ml-6 mb-12 ">Edit Todo</h1>

        <EditTodoForm
          groupId={params.groupId}
          id={params.id}
          todoTitle={todoTitle}
          todoPriority={todoPriority}
        />
      </div>
    </div>
  );
};

export default EditTodoPage;
