import React from "react";
import Html from "../assets/html.svg";
import { CiBookmark } from "react-icons/ci";

type Props = {
  title: string;
  price: number;
  start: string;
  rating: string;
};

const CourseCard = ({ title, price, start, rating }: Props) => {
  return (
    <div className="flex items-center  w-[40%] h-36 rounded-md p-5 mt-10 border border-blue-30 relative">
      <div className="absolute top-5 right-5">
        <CiBookmark size={25} />
      </div>
      <div className="w-[20%]">
        <img src={Html} className="h-full w-28 rounded-sm" />
      </div>
      <div className="w-[80%]">
        <p className="font-bold text-black text-xl mb-4">{title}</p>
        <div className="flex justify-center items-center gap-2">
          <div className="bg-gray-100 rounded-md w-36 h-10 flex items-center justify-center font-500 text-xs font-semibold">
            ₹ Price: {price}
          </div>
          <div className="bg-gray-100 rounded-md w-36 h-10 flex items-center justify-center text-xs font-semibold">
            Start: {start}
          </div>
          <div className="bg-gray-100 rounded-md w-36 h-10 flex items-center justify-center text-xs font-semibold">
            ☆ Rating: {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
