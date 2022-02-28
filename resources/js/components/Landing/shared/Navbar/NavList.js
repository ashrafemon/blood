import {
    Avatar,
    Button,
    Dialog, DialogContent,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import React from "react";
import {NavLink} from "react-router-dom";
import {useStyles} from "./styled";

import Logo from '../../../../assets/images/logo.png'
import MenuIcon from "@mui/icons-material/Menu";
import {Box} from "@mui/system";
import Login from "../Modal/Login";
import SignUp from "../Modal/SignUp";
import Email from "../Modal/Forget/Email";
import OTP from "../Modal/Forget/OTP";
import ChangePassword from "../Modal/Forget/ChangePassword";

const NavList = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <List className={classes.list}>


            {/*<ListItem>*/}
            {/*    <ListItemAvatar>*/}
            {/*        <Avatar src={Logo} className={classes.logo}/>*/}
            {/*    </ListItemAvatar>*/}
            {/*</ListItem>*/}

            <NavLink to="/">
                <ListItem>
                    <ListItemText>Home</ListItemText>
                </ListItem>
            </NavLink>

            <NavLink to="/donors">
                <ListItem>
                    <ListItemText>Donors</ListItemText>
                </ListItem>
            </NavLink>


            <NavLink to="/seekers">
                <ListItem>
                    <ListItemText>Seekers</ListItemText>
                </ListItem>
            </NavLink>

            <NavLink to="/campaign">
                <ListItem>
                    <ListItemText>Campaign</ListItemText>
                </ListItem>
            </NavLink>

            <NavLink to="/review">
                <ListItem>
                    <ListItemText>Reviews</ListItemText>
                </ListItem>
            </NavLink>

            <NavLink to="/about">
                <ListItem>
                    <ListItemText>About Us</ListItemText>
                </ListItem>
            </NavLink>

            <NavLink to="/blog">
                <ListItem>
                    <ListItemText>Blog</ListItemText>
                </ListItem>
            </NavLink>
            <NavLink to="/contact">
                <ListItem>
                    <ListItemText>Contact</ListItemText>
                </ListItem>
            </NavLink>

            <ListItem>

                <Button
                    className={classes.loginBtn}
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                >
                    Login
                </Button>


                <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>

                    <Box textAlign='center' my={2}>
                        <Typography variant='h3'>
                            Please Sign in
                        </Typography>
                    </Box>

                    <DialogContent>
                        <Login/>

                        <SignUp/>

                        <Email/>

                        <OTP/>

                        <ChangePassword/>


                    </DialogContent>

                </Dialog>


            </ListItem>
        </List>
    );
};

export default NavList;
