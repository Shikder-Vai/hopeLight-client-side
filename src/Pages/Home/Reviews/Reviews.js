import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../../hooks/useReviews";
import Review from "./Review/Review";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className=" ">
      <div className=" flex justify-center items-center">
        <h1 className="text-2xl mt-5 underline text-sky-300 ">
          Customer Reviews
        </h1>
      </div>
      <div className="grid p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.slice(0, 6).map((review) => (
          <Review key={review.index} review={review} />
        ))}
      </div>
      <div className=" flex justify-center items-center">
        <Link to={"/allreviews"} className="btn btn-info">
          See All Reviews
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
