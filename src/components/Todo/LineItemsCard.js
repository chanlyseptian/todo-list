import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VscCircleFilled, VscEdit } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { editCheckboxTodo, removeTodo } from "../../fetch/todoFetch";

const LineItemsCard = ({ data }) => {
  const [checked, setChecked] = useState(data.is_active === 0 ? true : false);
  const [todoActive, setTodoActive] = useState({
    is_active: data.is_active === 0 ? 1 : 0,
  });
  const navigate = useNavigate();

  const changeHandler = () => {
    setChecked(!checked);
    if (checked) {
      setTodoActive({ is_active: 0 });
    } else {
      setTodoActive({ is_active: 1 });
    }
    editCheckboxTodo(+data.id, todoActive);
  };

  const deleteHandler = () => {
    removeTodo(+data.id);
  };

  const clickHandler = () => {
    navigate(`/editTodo/${data.activity_group_id}/${+data.id}`);
  };


  return (
    <>
      <div className="w-full h-28 md:h-24 rounded-lg bg-white shadow-lg p-5 mt-8 -mb-4">
        <div className="flex justify-between items-center py-4 px-5 lg:px-12">
          <div className="flex items-center gap-5">
            <input
              type="checkbox"
              value={checked}
              defaultChecked={checked}
              className="w-4 h-4 "
              onChange={changeHandler}
            />

            <VscCircleFilled
              className={
                data.priority === "normal"
                  ? "text-green-500"
                  : data.priority === "very-high"
                  ? "text-red-500"
                  : data.priority === "high"
                  ? "text-amber-500"
                  : data.priority === "low"
                  ? "text-blue-600"
                  : data.priority === "very-low"
                  ? "text-purple-500"
                  : "text-black"
              }
            />

            <div className="text-xl font-semibold capitalize">
              <span
                className={
                  data.is_active === 0 ? "line-through text-gray-400" : ""
                }
              >
                {data.title}
              </span>
            </div>
            <button onClick={clickHandler} className="mr-5 md:mr-0 ">
              <VscEdit className="text-gray-500 hover:text-primary" />
            </button>
          </div>

          <button onClick={deleteHandler}>
            <RiDeleteBin6Line className="text-gray-400 hover:text-red-500"></RiDeleteBin6Line>
          </button>
        </div>
      </div>
    </>
  );
};

export default LineItemsCard;
