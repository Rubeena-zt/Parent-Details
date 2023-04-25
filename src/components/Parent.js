import React from "react";
import profile from "../public/images/prof-removebg-preview.png";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getParent} from '../store/features/parentSlice'

const Parent = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getParent())
  },[])

  return (
    <div className="flex">
      <div className="w-32 mt-4">
        <img src={profile} alt="Profile" />
      </div>
      <div className="ml-6">
        <div className="text-4xl/tight font-semibold mt-4 mb-7">
          <h4 className="">Geetha</h4>
        </div>
        <div className="font-arial">
          <h6>
            <span className="text-gray-500">Phone:</span>
            <span className="font-medium text-gray-600">5463756756</span>
          </h6>
          <h6>
            <span className="text-gray-500">Email:</span>
            <span className="font-semibold text-gray-600">
              divya.raj@zaeemsolutions.com
            </span>
          </h6>
          <h6>
            <span className="text-gray-500">DOB:</span>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Parent;
