import {
    AppBar,
    Avatar,
    Button,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Toolbar,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styled";

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            color="transparent"
            className={classes.appBar}
        >
            <Toolbar>
                <Container maxWidth="xl">
                    <List className={classes.list}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src="https://t4.ftcdn.net/jpg/01/05/48/99/360_F_105489957_HLDAbr6hatX6iKvR4DEZ38YVZJHXl8As.jpg" />
                            </ListItemAvatar>
                        </ListItem>
                        <NavLink to="/">
                            <ListItem>
                                <ListItemText>Home</ListItemText>
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

                        <NavLink to="/">
                            <ListItem>
                                <ListItemText>Reviews</ListItemText>
                            </ListItem>
                        </NavLink>

                        <NavLink to="/">
                            <ListItem>
                                <ListItemText>About Us</ListItemText>
                            </ListItem>
                        </NavLink>

                        <NavLink to="/">
                            <ListItem>
                                <ListItemText>Blog</ListItemText>
                            </ListItem>
                        </NavLink>
                        <NavLink to="/">
                            <ListItem>
                                <ListItemText>Contact</ListItemText>
                            </ListItem>
                        </NavLink>
                        <ListItem>
                            <Button
                                className={classes.loginBtn}
                                variant="contained"
                                color="primary"
                            >
                                Login
                            </Button>
                        </ListItem>
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
