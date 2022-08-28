import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../../fetch/todoFetch";

const AddListItemForm = ({ id }) => {
  const [addData, setaddData] = useState({
    activity_group_id: +id,
    title: "New Item",
    priority: "very-high",
  });
  const navigate = useNavigate();

  const submitHandler = () => {
    addTodo(addData);
    navigate(`/detail/${id}`);
  };

  return (
    <form
      className="bg-white shadow-md rounded-lg px-8 pt-6 pb-16  md:w-[550px] relative"
      onSubmit={submitHandler}
    >
      <div className="mb-4">
        <h1 className="block text-gray-700 font-bold mb-2 text-lg">
          Tambah List Item
        </h1>
        <hr className="my-5" />

        <label htmlFor="title" className="font-semibold text-sm">
          Nama List Item
        </label>
        <input
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2 mb-4"
          id="title"
          name="title"
          type="text"
          onChange={(e) => setaddData({ ...addData, title: e.target.value })}
          placeholder="Tambahkan nama list item"
        />

        <div className="flex flex-col justify-center w-1/2 space-y-2">
          <label htmlFor="title" className="font-semibold text-sm">
            Priority
          </label>
          <select
            name="priority"
            className="bg-gray-50 focus:bg-gray-200 p-2 rounded-lg shadow-xl cursor-pointer"
            onChange={(e) =>
              setaddData({ ...addData, priority: e.target.value })
            }
          >
            <option value="very-high" className="bg-white">
              Very High
            </option>
            <option value="high" className="bg-white">
              High
            </option>
            <option value="normal" className="bg-white">
              Normal
            </option>
            <option value="low" className="bg-white">
              Low
            </option>
            <option value="very-low" className="bg-white">
              Very Low
            </option>
          </select>
        </div>
        <hr className="my-7" />
        <input
          className="bg-primary p-2 w-1/3 right-7 absolute text-white rounded-full hover:bg-blue-500 cursor-pointer"
          type="submit"
          value="Simpan"
        ></input>
      </div>
    </form>
  );
};

export default AddListItemForm;
