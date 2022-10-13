import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { ratingHouse } from "../../../redux/actionThunk/houseActionThunk";
import { useParams } from "react-router";

export default function Rate({ rating }) {
  const dispatch = useDispatch();
  let { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const handleRating = (e) => {
    dispatch(ratingHouse({ id: id, rating: e.target.value, idUser: user.id }));
  };

  const myRating = 0;

  return (
    <Box
      sx={{
        mt: 4,
        mb: 2,
      }}
    >
      <div className="flex">
        <div className="mr-5">
          <Typography variant="h6">Đánh giá</Typography>
        </div>
        <div className="mt-1">
          <Rating
            name="simple-controlled"
            value={myRating}
            onChange={(e) => handleRating(e)}
          />
          <span style={{ top: "-6px", position: "relative", fontSize: "17px" }}>
            {" (" + Math.floor(rating) + ")"}
          </span>
        </div>
      </div>
    </Box>
  );
}
