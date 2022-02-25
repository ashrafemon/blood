import React from 'react'
import {Box} from "@mui/system";
import {Avatar, Button, Card, CardContent, Container, Grid, Typography} from "@mui/material";
import {useStyles} from "./styled";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import BlogImg1 from "../../../../assets/images/blog-1.png";

const Blog = () => {
    const classes = useStyles()


    return (
        <Box py={5}>
            <Container maxWidth="xl">
                <Typography variant="h2" color="primary" pb={5} mb={2} align="center" className={classes.title}>Recent
                    Blogs</Typography>

                <Box mb={10}>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={5} lg={3}>
                            <Typography variant="body1" color="lightgray" align="center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut convallis elit sem
                                pretium mi cursus diam. Arcu
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container spacing={2}>
                    <Grid item lg={4}>
                        <Card>
                            <CardContent>
                                <Avatar src={BlogImg1} className={classes.avatar}/>

                                <Typography variant='body1'>
                                    Blog Title
                                </Typography>


                                <Typography variant='body1'>
                                    by Ashiqur Rahman 14th Feb, 2021 3 comments
                                </Typography>


                                <Typography variant='body1'>
                                    The way to survive in modern society is to be an ascetic. It is to retreat from
                                    society. There’s too much society everywhere you go.
                                </Typography>

                                <Button variant='text'>
                                    Read More <ArrowRightAltIcon/>
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>

                <Box textAlign='center' mt={10}>
                    <Button variant='outlined'>
                        Load more blogs
                    </Button>
                </Box>

            </Container>


        </Box>
    )
}

export default Blog;
