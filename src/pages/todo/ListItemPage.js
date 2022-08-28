import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IllustrationAdd, LineItemsCard } from "../../components";
import { getOneActivity } from "../../fetch/activityFetch";
import { AiFillEdit } from "react-icons/ai";
import { IoChevronBackOutline } from "react-icons/io5";

const ListItemPage = () => {
  const [detail, setDetail] = useState({
    id: null,
    title: "",
    created_at: "",
    todo_items: [],
  });

  const [sortOption, setSortOption] = useState("new");

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
  });

  const clickEditHandler = () => {
    navigate(`/editActivity/${+params.id}/${detail.title}`);
  };

  const clickAddHandler = () => {
    navigate(`/addItem/${+params.id}`);
  };

  const renderCardNew = () => {
    return (detail.todo_items || []).map((data, index) => {
      return <LineItemsCard key={index} data={data} />;
    });
  };

  const renderCardOld = () => {
    return (detail.todo_items || [])
      .sort((a, b) => (a.id > b.id ? 1 : -1))
      .map((data, index) => {
        return <LineItemsCard key={index} data={data} />;
      });
  };

  const renderCardAZ = () => {
    return (detail.todo_items || [])
      .sort((a, b) => (a.title > b.title ? 1 : -1))
      .map((data, index) => {
        return <LineItemsCard key={index} data={data} />;
      });
  };

  const renderCardZA = () => {
    return (detail.todo_items || [])
      .sort((a, b) => (b.title > a.title ? 1 : -1))
      .map((data, index) => {
        return <LineItemsCard key={index} data={data} />;
      });
  };

  const renderCardUnfinished = () => {
    return (detail.todo_items || [])
      .sort((a, b) => (b.is_active > a.is_active ? 1 : -1))
      .map((data, index) => {
        return <LineItemsCard key={index} data={data} />;
      });
  };

  const renderSortOption = () => {
    return (
      <select
        name="priority"
        defaultValue={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="ml-8 md:ml-0 bg-blue-50 px-2 py-0 focus:bg-blue-200 rounded-lg shadow-xl cursor-pointer"
      >
        <option value="new" className="bg-white">
          Terbaru
        </option>
        <option value="old" className="bg-white">
          Terlama
        </option>
        <option value="az" className="bg-white">
          A-Z
        </option>
        <option value="za" className="bg-white">
          Z-A
        </option>
        <option value="unfinished" className="bg-white">
          Belum Selesai
        </option>
      </select>
    );
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="container mx-auto px-10 xl:px-64">
        <div className="flex justify-between mt-12">
          <div className="flex items-center">
            <h1 className="text-3xl font-semibold flex items-center">
              {" "}
              <IoChevronBackOutline
                className="mr-4 md:-ml-2 cursor-pointer hover:text-primary"
                onClick={handleClick}
              />{" "}
              {detail.title}
            </h1>
            <button className="ml-2" onClick={clickEditHandler}>
              <AiFillEdit className="hover:text-primary" />
            </button>
          </div>

          <div className="flex space-x-2">
            {detail.todo_items.length !== 0 ? renderSortOption() : <div></div>}

            <button
              className="rounded-full bg-primary py-3 px-6 text-white hover:bg-blue-600"
              onClick={clickAddHandler}
            >
              + Tambah
            </button>
          </div>
        </div>
        {detail.todo_items.length !== 0 && sortOption === "new" ? (
          renderCardNew()
        ) : detail.todo_items.length !== 0 && sortOption === "old" ? (
          renderCardOld()
        ) : detail.todo_items.length !== 0 && sortOption === "az" ? (
          renderCardAZ()
        ) : detail.todo_items.length !== 0 && sortOption === "za" ? (
          renderCardZA()
        ) : detail.todo_items.length !== 0 && sortOption === "unfinished" ? (
          renderCardUnfinished()
        ) : (
          <div className="flex justify-center mt-10 ">
            <IllustrationAdd />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItemPage;
