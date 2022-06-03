import React from "react";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";

export default function NewFeed({ imageFile, description, title, _id }) {
  return (
    <>
      <Link
        to={`/tour/${_id}`}
        className="d-flex align-items-center text-black mb-2"
      >
        <div className="p-1">
          <img
            src={imageFile}
            height="50px"
            width="100px"
            className="img-fluid rounded"
            alt=""
          />
        </div>
        <div className=" d-flex flex-column align-items-start ms-1">
          <h5 className="">{title}</h5>
          <span> {excerpt(description, 30)}</span>
        </div>
      </Link>
    </>
  );
}
