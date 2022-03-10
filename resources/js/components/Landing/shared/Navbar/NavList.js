import {
    Avatar,
    Badge,
    Button,
    Dialog,
    DialogContent,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Popover,
    Typography,
} from "@mui/material";
import React, {useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useStyles} from "./styled";
import Login from "../../Auth/Login";

import profileImg from "../../../../assets/images/default_avatar.gif"
import LoginLogo from "../../../../assets/images/login-logo.png"
import {useDispatch, useSelector} from "react-redux";
import {AUTH_FORM_TYPE, TOGGLE_DIALOG} from "../../../../store/types";
import {logout} from "../../../../store/actions/authActions";
import {Box} from "@mui/system";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Registration from "../../Auth/Registration";
import OTP from "../../Auth/Recovery/OTP";
import ChangePassword from "../../Auth/Recovery/ChangePassword";
import RecoverEmail from "../../Auth/Recovery/Email";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Logout} from "@mui/icons-material";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PasswordIcon from '@mui/icons-material/Password';
import PasswordChange from "../../Profile/PasswordChange";

const NavList = () => {
    const classes = useStyles();

    const {toggleDialog} = useSelector(state => state.site)
    const {authFormType, currentUser, notificationList} = useSelector(state => state.auth)
    const dispatch = useDispatch()


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

    const showPasswordDialog = () => {
        dispatch({
            type: TOGGLE_DIALOG,
            payload: true
        })

        dispatch({
            type: AUTH_FORM_TYPE,
            payload: 'change_password'
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

    const [profileAnchorEl, setProfileAnchorEl] = useState(null);

    const showProfile = (event) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const hideProfile = () => {
        setProfileAnchorEl(null);
    };

    const profileOpen = Boolean(profileAnchorEl);
    const profileId = profileOpen ? 'profile-popover' : undefined;

    const [notifyAnchorEl, setNotifyAnchorEl] = useState(null);

    const showNotify = (event) => {
        setNotifyAnchorEl(event.currentTarget);
    };

    const hideNotify = () => {
        setNotifyAnchorEl(null);
    };

    const notifyOpen = Boolean(notifyAnchorEl);
    const notifyId = notifyOpen ? 'notify-popover' : undefined;


    const donateProfile = (id) => {
        let url = '/donor-profile/:id'
        history.push(url.replace(':id', id))
    }


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

            {currentUser && (
                <ListItem>
                    <IconButton
                        onClick={showNotify}
                    >
                        <Badge badgeContent={4} color="primary">
                            <NotificationsNoneOutlinedIcon color="action"/>
                        </Badge>
                    </IconButton>

                    <Popover
                        id={notifyId}
                        open={notifyOpen}
                        anchorEl={notifyAnchorEl}
                        onClose={hideNotify}

                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        {notificationList?.map((item, i) => (
                            <>
                                <List key={i}>

                                    <ListItem onClick={() => donateProfile(item?.id)}>
                                        <Typography>
                                            {item?.user?.name} Has been Accept Your Request.
                                        </Typography>
                                    </ListItem>

                                </List>
                            </>
                        ))}

                    </Popover>


                </ListItem>
            )}


            <ListItem>
                {currentUser ? (
                    <>
                        <IconButton
                            onClick={showProfile}
                        >
                            <Avatar src={currentUser ? currentUser?.profile?.avatar : profileImg}/>
                        </IconButton>

                        <Popover
                            id={profileId}
                            open={profileOpen}
                            anchorEl={profileAnchorEl}
                            onClose={hideProfile}

                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <List>
                                <NavLink to="/profile">
                                    <ListItem>
                                        <ListItemIcon>
                                            <AccountCircleIcon/>
                                        </ListItemIcon>
                                        Profile
                                    </ListItem>
                                </NavLink>


                                <ListItem className={classes.logoutBtn} onClick={showPasswordDialog}>
                                    <ListItemIcon>
                                        <PasswordIcon fontSize="small"/>
                                    </ListItemIcon>
                                    Change Password
                                </ListItem>

                                <ListItem onClick={destroy} className={classes.logoutBtn}>
                                    <ListItemIcon>
                                        <Logout fontSize="small"/>
                                    </ListItemIcon>
                                    Logout
                                </ListItem>


                            </List>
                        </Popover>
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


                <Dialog open={toggleDialog} onClose={closeDialog} maxWidth="sm" fullWidth className={classes.modal}>
                    <DialogContent>

                        <Box textAlign='end'>
                            <IconButton onClick={closeDialog}>
                                <CloseOutlinedIcon/>
                            </IconButton>
                        </Box>

                        {authFormType === 'change_password' ? <PasswordChange/> : (
                            <>
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
                            </>
                        )}


                    </DialogContent>

                </Dialog>


            </ListItem>
        </List>
    );
};

export default NavList;
