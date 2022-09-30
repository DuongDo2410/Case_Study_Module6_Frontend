import LeftContent from "./LeftContent";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import RightContent from "./RightContent";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Content(){
    return (
        <div style={{backgroundColor: "#f6f8fa", height: "85vh"}}>
            <Box sx={{ flexGrow: 1, margin: "0px 100px" }}>
                <Grid container spacing={4} sx={{ margin: "0px 0px" }}>
                    <Grid item xs={4}>
                        <Item>
                            <LeftContent/>
                        </Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>
                            <RightContent/>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}