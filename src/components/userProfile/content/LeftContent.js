import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import {Avatar} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import {Link} from "react-router-dom";


export default function LeftContent() {
    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU" sx={{width: "70px" ,height:"70px" , margin: "5px 5px"}}/>
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
                            <ListItemText primary="Bất động sản yêu thích " />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PermIdentityIcon />
                            </ListItemIcon>
                            <ListItemText primary="Thông tin cá nhân  " />
                        </ListItemButton>
                    </ListItem>
                    <Link to={"/profile/changePassword"}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Đổi mật khẩu " />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Thoát " />
                        </ListItemButton>
                    </ListItem>
                </List>
            </nav>
        </Box>
    );
}
