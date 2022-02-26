import React from "react";
import {useStyles} from "./styled";
import {Box} from "@mui/system";
import {Avatar, Container, Grid, IconButton, Typography} from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterLogo from '../../../../assets/images/footer-logo.png'

const Navbar = () => {
    const classes = useStyles();

    return (
        <Box py={5} className={classes.footer}>
            <Container maxWidth='xl'>

                <Grid container alignItems='center'>
                    <Grid item xl={4}>
                        <IconButton>
                            <FacebookRoundedIcon/>
                        </IconButton>

                        <IconButton>
                            <InstagramIcon/>
                        </IconButton>

                        <IconButton>
                            <LinkedInIcon/>
                        </IconButton>
                    </Grid>


                    <Grid item xl={4} justifyContent='center'>
                        <Avatar src={FooterLogo} className={classes.avatar}/>
                    </Grid>

                    <Grid item xl={4} textAlign='end'>
                        <Typography variant='body1' color='white'>
                           &copy; donates 2022. All rights reserved
                        </Typography>
                    </Grid>
                </Grid>



            </Container>
        </Box>
    );
};

export default Navbar;
