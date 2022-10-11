import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/actionThunk/userActionThunk";
import {useState} from "react";
import {useParams} from "react-router";
import {updateComment} from "../../redux/actionThunk/houseActionThunk";


const Comment = ({house}) => {
  const [comment, setComment] = useState('');
  let { user } = useSelector((state) => state.user);
  let { id } = useParams();
  const disPatch = useDispatch();
  // useEffect(() => {
  //   disPatch(getUserById());
  // }, []);

  const handleComment = (event) => {
    event.preventDefault()
    disPatch(updateComment({id: id, comment: {user: user, text: comment}}))
    setComment("")
  }

  return (
        <div className="container mx-auto mb-10">
          <h2 className="text-5xl">Bình luận</h2>
          <div >
            <form className="flex justify-start " onSubmit={handleComment}>
            <img
                src={user && user.avatar}
                alt=""
                className="w-10 h-10 object-cover rounded-3xl"
                placeholder="Bình luận của bạn ...."
            />
              <input type="text"
                     value={comment}
                     placeholder={"Write comment ...."}
                     className="ml-4 w-3/5 border rounded-3xl pl-8 focus:outline-0 "
                     onChange={e => setComment(e.target.value)}/>
            </form>


            {house?.comment?.map((comment, index) =>(
                    <div style={{display: "flex", flexDirection: "row", marginTop: "50px"}} key={index} >
                      <div>
                        <img
                            src={user && user.avatar}
                            alt=""
                            className="w-10 h-10 object-cover rounded-3xl"
                            placeholder="Bình luận của bạn ...."
                        />
                      </div>
                      <div style={{display: "flex", flexDirection: "column", marginLeft: "7px"}}>
                        <div style={{fontWeight: "600"}}>{comment?.user?.username}</div>
                        <div>{comment?.text}</div>
                      </div>
                    </div>
                )
            )}
          </div>
        </div>
  );
};

export default Comment;