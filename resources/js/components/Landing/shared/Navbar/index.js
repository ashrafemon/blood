import {AppBar, Avatar, Container, Grid, Hidden, IconButton, SwipeableDrawer, Toolbar,} from "@mui/material";
import React, {useState} from "react";
import {useStyles} from "./styled";

import Logo from '../../../../assets/images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import NavList from "./NavList";
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const drawerHandler = (status) => {
        setOpen(status);
    };

    return (
        <AppBar
            position="fixed"
            color="transparent"
            className={classes.appBar}
        >
            <Toolbar>
                <Container maxWidth="xl">
                    <Grid container alignItems='center'>

                        <Grid item lg={1} sm={11} xs={11}>

                            <Avatar src={Logo} className={classes.logo}/>

                        </Grid>

                        <Grid item lg={11} sm={1} xs={1}>

                            <Hidden mdUp>
                                <IconButton onClick={drawerHandler}>
                                    <MenuIcon fontSize="large"/>
                                </IconButton>

                                <SwipeableDrawer
                                    className={classes.drawer}
                                    anchor="right"
                                    open={open}
                                    onClose={() => drawerHandler(false)}
                                >
                                    <Grid container>
                                        <Grid item xs={8}>
                                            <NavList/>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <IconButton onClick={() => drawerHandler(false)}>
                                                <CloseIcon fontSize="large"/>
                                            </IconButton>
                                        </Grid>
                                    </Grid>



                                </SwipeableDrawer>
                            </Hidden>


                            <Hidden smDown>
                                <NavList/>
                            </Hidden>
                        </Grid>
                    </Grid>


                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
