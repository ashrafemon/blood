import {
    Avatar,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem, Typography,
} from "@mui/material";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {useStyles} from "./styled";
import Login from "../../Auth/Login";

import profileImg from "../../../../assets/images/login-logo.png"
import {useDispatch, useSelector} from "react-redux";
import {TOGGLE_DIALOG} from "../../../../store/types";
import {Logout} from "@mui/icons-material";
import {logout} from "../../../../store/actions/authActions";
import {Box} from "@mui/system";
import Registration from "../../Auth/Registration";

const NavList = () => {
    const classes = useStyles();

    const {toggleDialog} = useSelector(state => state.site)
    const dispatch = useDispatch()

    const getToken = localStorage.getItem('token')


    const [show, setShow] = useState(false)

    // const handleClose = () => {
    //     dispatch({
    //         type: TOGGLE_DIALOG,
    //         payload: false,
    //     })
    // };

    const showDialog = () => {
        dispatch({
            type: TOGGLE_DIALOG,
            payload: true
        })

    }

    const destroy = () => {
        dispatch(logout())
    }

    const showRegistration = () => {
        setShow(true)
    }



    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <List className={classes.list}>
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
                {getToken ? (

                    // <IconButton
                    //     size="small"
                    // >
                    //     <Avatar src={profileImg}/>
                    // </IconButton>

                    <>

                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ml: 2}}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar src={profileImg}/>
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            className={classes.profile}
                            transformOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                        >
                            <MenuItem>
                                <Avatar/> Profile
                            </MenuItem>

                            <MenuItem onClick={destroy}>
                                <ListItemIcon>
                                    <Logout fontSize="small"/>
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Button
                        className={classes.loginBtn}
                        variant="contained"
                        color="primary"
                        onClick={() => showDialog()}
                    >
                        Login
                    </Button>
                )}


                <Dialog open={toggleDialog} onClose={handleClose} maxWidth="sm" fullWidth className={classes.modal}>
                    <DialogContent>



                        { show ? <Registration /> : <Login/> }

                        <Box textAlign='center' my={2}>
                            <Typography>
                                OR
                            </Typography>

                            <Button variant="text" onClick={showRegistration}>{show ? 'Login' : 'Sign Up'}</Button>
                        </Box>

                        {/*<Registration/>*/}

                        {/*<Email/>*/}

                        {/*<OTP/>*/}

                        {/*<ChangePassword/>*/}


                    </DialogContent>

                </Dialog>


            </ListItem>
        </List>
    );
};

export default NavList;
