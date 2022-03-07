import {
    Avatar, Badge,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useStyles} from "./styled";
import Login from "../../Auth/Login";

import profileImg from "../../../../assets/images/default_avatar.gif"
import LoginLogo from "../../../../assets/images/login-logo.png"
import {useDispatch, useSelector} from "react-redux";
import {AUTH_FORM_TYPE, TOGGLE_DIALOG, TOGGLE_DROPDOWN} from "../../../../store/types";
import {Logout} from "@mui/icons-material";
import {logout} from "../../../../store/actions/authActions";
import {Box} from "@mui/system";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Registration from "../../Auth/Registration";
import OTP from "../../Auth/Recovery/OTP";
import ChangePassword from "../../Auth/Recovery/ChangePassword";
import RecoverEmail from "../../Auth/Recovery/Email";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
const NavList = () => {
    const classes = useStyles();

    const {toggleDialog, toggleDropdown, toggleDropdownMenu} = useSelector(state => state.site)
    const {authFormType} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const getToken = localStorage.getItem('token')

    const showDialog = () => {
        dispatch({
            type: TOGGLE_DIALOG,
            payload: true
        })

        dispatch({
            type: AUTH_FORM_TYPE,
            payload: 'login'
        })
    }

    const closeDialog = () => {
        dispatch({
            type: TOGGLE_DIALOG,
            payload: false
        })

        dispatch({
            type: AUTH_FORM_TYPE,
            payload: 'login'
        })
    }

    const destroy = () => {
        dispatch(logout(() => routeChange('/')))
    }

    const showRegistration = () => {
        if (authFormType === 'login') {
            dispatch({
                type: AUTH_FORM_TYPE,
                payload: 'register'
            })
        } else if (authFormType === 'register') {
            dispatch({
                type: AUTH_FORM_TYPE,
                payload: 'login'
            })
        } else if (authFormType === 'forgot') {
            dispatch({
                type: AUTH_FORM_TYPE,
                payload: 'login'
            })
        }
    }


    let history = useHistory();
    const routeChange = (route) => {
        history.push(route);
    }

    const menuOpen = (menu)=>{
        if (menu === 'notification'){
            dispatch({
                type: TOGGLE_DROPDOWN,
                payload: {
                    toggleDropdown: true,
                    toggleDropdownMenu: 'notification'
                }
            })
        } else if (menu === 'profile'){
            dispatch({
                type: TOGGLE_DROPDOWN,
                payload: {
                    toggleDropdown: true,
                    toggleDropdownMenu: 'profile'
                }
            })
        }
    }


    const handleClose = () => {

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

            <NavLink to="/post">
                <ListItem>
                    <ListItemText>Post</ListItemText>
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

            { getToken && (
                <ListItem>
                    <IconButton
                        onClick={()=> menuOpen('notification')}
                    >
                        <Badge badgeContent={4} color="primary">
                            <NotificationsNoneIcon color="action" />
                        </Badge>
                    </IconButton>


                    <Menu
                        anchorEl={toggleDropdown}
                        open={toggleDropdown}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => routeChange('/profile')}>
                           Someone Accept Request
                        </MenuItem>
                    </Menu>


                </ListItem>
            )}


            <ListItem>
                {getToken ? (
                    <>

                        <IconButton
                            onClick={()=> menuOpen('profile')}
                        >
                            <Avatar src={profileImg}/>
                        </IconButton>

                        <Menu
                            anchorEl={toggleDropdown}
                            open={toggleDropdown}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={() => routeChange('/profile')}>
                                <ListItemIcon>
                                    <AccountCircleIcon fontSize="small"/>
                                </ListItemIcon>
                                Profile
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

                        <Box textAlign='end'>
                            <IconButton onClick={closeDialog}>
                                <CloseOutlinedIcon/>
                            </IconButton>
                        </Box>

                        <Box textAlign='center' my={2}>
                            <Typography variant='h2'>
                                {authFormType === 'login' && 'Please Sign In'}
                                {authFormType === 'register' && 'Please Sign Up'}
                                {authFormType === 'forgot' && 'Forgot Password'}
                                {authFormType === 'otp' && 'Verify OTP'}
                                {authFormType === 'password' && 'Set Your New Password'}
                            </Typography>
                            <Avatar src={LoginLogo} className={classes.authLogo}/>
                        </Box>


                        {authFormType === 'login' && <Login/>}
                        {authFormType === 'register' && <Registration/>}
                        {authFormType === 'forgot' && <RecoverEmail/>}
                        {authFormType === 'otp' && <OTP/>}
                        {authFormType === 'password' && <ChangePassword/>}

                        <Box textAlign='center' my={2}>
                            <Typography mb={1}>
                                OR
                            </Typography>

                            <Button variant="text"
                                    onClick={showRegistration}>{authFormType === 'login' ? 'Sign Up' : 'Login'}</Button>
                        </Box>

                    </DialogContent>

                </Dialog>


            </ListItem>
        </List>
    );
};

export default NavList;
