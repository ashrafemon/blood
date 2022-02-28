import {AppBar, Avatar, Button, Container, Grid, Hidden, IconButton, SwipeableDrawer, Toolbar,} from "@mui/material";
import React, {useState} from "react";
import {useStyles} from "./styled";

import Logo from '../../../../assets/images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import NavList from "./NavList";

const Navbar = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    return (
        <AppBar
            position="fixed"
            color="transparent"
            className={classes.appBar}
        >
            <Toolbar>
                <Container maxWidth="xl">
                    <Grid container alignItems='center'>

                        <Grid item lg={1}>
                            <Button>
                                <Avatar src={Logo} className={classes.logo}/>
                            </Button>
                        </Grid>

                        <Grid item lg={11}>

                            <Hidden mdUp>
                                <IconButton  onClick={() => setOpen(true)}>
                                    <MenuIcon fontSize="large"/>
                                </IconButton>

                                <SwipeableDrawer
                                    className={classes.drawer}
                                    anchor="left"
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    onOpen={() => {}}
                                >
                                    <NavList/>
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
