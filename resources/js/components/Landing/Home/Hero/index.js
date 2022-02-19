import {Box} from "@mui/system";
import React from "react";
import {useStyles} from "./styled";
import {Avatar, Container, Grid, Typography} from "@mui/material";
import SearchDonor from "./SearchDonor";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HeroImg from '../../../../assets/images/home-hero/hero-1.png'

const Hero = () => {
    const classes = useStyles()

    const settings = {
        items: 1,
        autoplay: true,
        loop: true,
        dots: false,
        nav: false
    }

    return (
        <Box className={classes.box}>
            <OwlCarousel className="owl-theme" {...settings}>
                <Box className="item">
                    <Avatar src={HeroImg} className={classes.avatar}/>
                </Box>
                <Box className="item">
                    <Avatar src={HeroImg} className={classes.avatar}/>
                </Box>
            </OwlCarousel>

            <Box className={classes.content} pt={20}>
                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item xs={12} lg={6}>
                            <Typography variant="h4" color="white" mb={3}>Donates</Typography>
                            <Box mb={3}>
                                <Grid container>
                                    <Grid item xs={12} lg={8}>
                                        <Typography className={classes.heroTitle} variant="h2" color="white">
                                            Help <br/> others <br/> by giving
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Typography variant="h4" color="white" mb={5}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut convallis elit sem
                                pretium mi
                                cursus diam. Arcu, vitae nulla accumsan re iaculis.
                                Vitae tincidunt ornare turpis velit.
                            </Typography>

                            <SearchDonor/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Hero;
