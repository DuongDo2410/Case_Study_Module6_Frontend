import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import {useDispatch} from "react-redux";
import {ratingHouse} from "../../../redux/actionThunk/houseActionThunk";
import {useParams} from "react-router";



export default function Rate({rating}) {
    const dispatch = useDispatch();
    const {id} = useParams();
    const handleRating = (e) => {
        dispatch(ratingHouse({id: id, rating: e.target.value}))
    }


    return (
        <Box
            sx={{
                mt: -3, mb: 3
            }}
        >
            <div className="flex">
                <div className="mr-5">
                    <Typography variant="h6">Đánh giá</Typography>
                </div>
                <div className="mt-1">
                    <Rating
                        name="simple-controlled"
                        value={rating ? rating : 0}
                        onChange={e => handleRating(e)
                        }
                    />
                </div>
            </div>


        </Box>
    );
}
