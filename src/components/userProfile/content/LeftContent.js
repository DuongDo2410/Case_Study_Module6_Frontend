import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getHistory } from "../../../redux/actionThunk/houseActionThunk";
import { setStatusUserActionIdle } from "../../../redux/slide/houseSlide";

export default function LeftContent() {
  let { user } = useSelector((state) => state.auth);
  const disPatch = useDispatch();
  const handelGetHistory = () => {
    disPatch(getHistory());
    disPatch(setStatusUserActionIdle());
  };
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Box sx={{ display: "flex" }}>
        <Avatar
          alt="Remy Sharp"
          src={user && user.avatar}
          sx={{ width: "70px", height: "70px", margin: "5px 5px" }}
        />
        <Typography
          variant="h5"
          sx={{ lineHeight: 4, textAlign: "center", marginLeft: 3 }}
          gutterBottom
        >
          {user && user.fullName}
        </Typography>
      </Box>
      <Divider />
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsNoneIcon />
              </ListItemIcon>
              {/* <ListItemText primary="Thông tin cá nhân  " /> */}
              <Link to={`/profile/${user.id}`}>Thông tin tài khoản</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BreakfastDiningIcon />
              </ListItemIcon>
              {/*<ListItemText primary="Đơn chờ " />*/}
              <Link to={"/bookingPending"}>Quản lý đơn </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>{/* <FavoriteBorderIcon /> */}</ListItemIcon>
              {/* <ListItemText primary="Bất động sản yêu thích " /> */}
              <Link to={"/profile/house/list"}>Quản lý nhà</Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              {/* <ListItemText primary="Thông tin cá nhân  " /> */}
              <Link to={"/profile/changePassword"}>Thay đổi mật khẩu </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              {/*<ListItemText primary="Lịch sử thuê nhà  "/>*/}
              <Link to={"/profile/history"} onClick={handelGetHistory}>
                Lịch sử thuê nhà
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
