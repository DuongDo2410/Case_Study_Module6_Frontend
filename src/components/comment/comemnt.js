import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/actionThunk/userActionThunk";

const Comment = () => {
  let { user } = useSelector((state) => state.user);
  const disPatch = useDispatch();
  useEffect(() => {
    disPatch(getUserById());
  }, []);
  console.log("1", user);
  return (
    <>
      <div className="container mx-auto mb-10">
        <h2 className="text-5xl">Bình luận</h2>
        <div className="flex justify-start ">
          <img
            src={user && user.avatar}
            alt=""
            className="w-10 h-10 object-cover rounded-3xl"
            placeholder="Bình luận của bạn ...."
          />
          <input type="text" className="ml-4 w-full border rounded-3xl pl-8" />
        </div>
      </div>
    </>
  );
};

export default Comment;
