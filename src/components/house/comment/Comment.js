import {Avatar} from "@mui/material";
import "./post.css";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateComment} from "../../../redux/actionThunk/houseActionThunk";
import {useParams} from "react-router";

export default function Comments({house}){
    const [comment, setComment] = useState('');
    let { user } = useSelector((state) => state.user);
    let { id } = useParams();

    const dispatch = useDispatch();


    const handleComment = (event) => {
        event.preventDefault()
        dispatch(updateComment({id: id, comment: {user: user, text: comment}}))
        setComment("")
    }


    return (
        <div style={{width: "765px"}}>
            <form style={{display: "flex", flexDirection: "row", width: "765px"}} onSubmit={handleComment}>
                <Avatar src={comment?.user?.avatar}/>
                <input type="text" value={comment} placeholder={"Write comment ...."} className={"comments"} style={{width: "765px", marginLeft: "5px "}} onChange={e => setComment(e.target.value)}/>
            </form>
            {console.log(house)}
            {house?.comment?.map((comment, index) =>(
                    <div style={{display: "flex", flexDirection: "row", marginTop: "5px"}} key={index} >
                        <div>
                            <Avatar src={comment?.user?.avatar}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", marginLeft: "7px"}}>
                            <div style={{fontWeight: "600"}}>{comment?.user?.username}</div>
                            <div>{comment?.text}</div>
                        </div>
                    </div>
                )
            )}
        </div>

    )
}