import React from 'react'
import {Box} from "@mui/system";
import {Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {useStyles} from "./styled";
import OwlCarousel from "react-owl-carousel";

const Reviews = () => {
    const classes = useStyles()

    const settings = {
        items: 1,
        autoplay: false,
        loop: true,
        dots: true,
        nav: false
    }

    return(
        <Box py={5}>
            <Container maxWidth="xl">
                <Typography variant="h2" color="primary" pb={5} mb={2} align="center" className={classes.title}>Reviews</Typography>

                <Box mb={10}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={5} lg={3}>
                            <Typography variant="body1" color="lightgray" align="center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut convallis elit sem pretium mi cursus diam. Arcu
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>


            <Box className={classes.reviewBox}>
                <Container maxWidth='sm'>
                    <OwlCarousel className="owl-theme" {...settings}>
                        {/* ===== Slider Item 1 ===== */}
                        <Box className="item">
                            <Card className={classes.reviewCard}>
                                <CardContent>
                                    <Typography variant='h3' color='primary'>
                                        Recipient
                                    </Typography>

                                    <Typography variant='body1'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vivamus sollicitudin interdum morbi sed varius vestibulum et, lectus. Vel porta eget ac est nam. Hendrerit id amet euismod et facilisis tincidunt nibh.
                                    </Typography>
                                    <Typography variant='h5'>
                                        Ashiqur Rahman
                                    </Typography>
                                    <Typography variant='p'>
                                        Dhaka, Bangladesh
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                        {/* ===== Slider Item 2 ===== */}
                        <Box className="item">
                            <Card className={classes.reviewCard}>
                                <CardContent>
                                    <Typography variant='h3' color='primary'>
                                        Recipient
                                    </Typography>

                                    <Typography variant='body1'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper vivamus sollicitudin interdum morbi sed varius vestibulum et, lectus. Vel porta eget ac est nam. Hendrerit id amet euismod et facilisis tincidunt nibh.
                                    </Typography>
                                    <Typography variant='h5'>
                                        Ashiqur Rahman
                                    </Typography>
                                    <Typography variant='p'>
                                        Dhaka, Bangladesh
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>

                    </OwlCarousel>

                </Container>
            </Box>
        </Box>
    )
}

export default Reviews;
