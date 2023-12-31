import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ name, image, category, price, loading,id  }) => {
  return (
    <div className="bg-white shadow-md p-2 rounded min-w-[150px] hover:shadow-2xl duration-500 ease-in-out">
      {name ? (
        <>
        <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
          <div className="w-40 min-h-[150px]">
            <img
              src={image}
              alt=""
              className="h-full w-full hover:scale-105 duration-500 ease-in-out"
            />
          </div>
          <h3 className="font-semibold text-slate-600 text-center capitalize text-lg ">
            {name}
          </h3>
          <p className="text-center text-slate-500 font-medium">{category}</p>
          <p className="text-center font-bold">
            ₹<span>{price}</span>
          </p>
          </Link>
        </>
      ) : (
        <div className="flex justify-center items-center min-w-[160px] min-h-[236px]">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default HomeCard;
