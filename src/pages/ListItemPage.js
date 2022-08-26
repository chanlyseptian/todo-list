import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import IllustrationAdd from "../components/IllustrationAdd";
import { getOneActivity } from "../fetch/activityFetch";
import { AiFillEdit } from "react-icons/ai";

const ListItemPage = () => {
  const [detail, setDetail] = useState({
    id: null,
    title: "",
    created_at: "",
    todo_items: [],
  });

  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    navigate("/");
  };

  const getActivityDetail = () => {
    const { id } = params;
    getOneActivity(+id, (result) => {
      setDetail({
        id: +id,
        title: result.title,
        created_at: result.created_at,
        todo_items: result.todo_items,
      });
    });
  };

  useEffect(() => {
    getActivityDetail();
  }, []);

  const clickEditHandler = () => {
    navigate(`/editActivity/${+params.id}`);
  };

  const clickAddHandler = () => {
    navigate(`/addItem`);
  };

  return (
    <div className="container mx-auto px-12 md:px-64">
      <div className="flex justify-between mt-12">
        <div className="flex items-center">
          <h1
            className="text-3xl font-semibold ml-6 cursor-pointer hover:text-gray-600"
            onClick={handleClick}
          >
            {" "}
            {"<"} {detail.title}
          </h1>
          <button className="ml-4" onClick={clickEditHandler}>
            <AiFillEdit className="hover:text-primary" />
          </button>
        </div>

        <button
          className="rounded-full bg-primary py-3 px-6 text-white hover:bg-blue-600"
          onClick={clickAddHandler}
        >
          + Tambah
        </button>
      </div>
      {detail.todo_items.length !== 0 ? (
        <div>test</div>
      ) : (
        <div className="flex justify-center mt-10 ">
          <IllustrationAdd />
        </div>
      )}
    </div>
  );
};

export default ListItemPage;
