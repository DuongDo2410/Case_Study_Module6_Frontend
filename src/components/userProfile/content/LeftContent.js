import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function LeftContent() {
  let { user } = useSelector((state) => state.user);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Avatar
        alt="Remy Sharp"
        src={user && user.avatar}
        sx={{ width: "70px", height: "70px", margin: "5px 5px" }}
      />
      <Divider />
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsNoneIcon />
              </ListItemIcon>
              <ListItemText primary="Thông báo & tìm kiếm " />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              {/* <ListItemText primary="Bất động sản yêu thích " /> */}
              <Link to={"/profile/addHouse"}>Thêm nhà </Link>
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
              {/*<ListItemText primary="Thoát "/>*/}
              <Link to ={"/"}>Thoát</Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
