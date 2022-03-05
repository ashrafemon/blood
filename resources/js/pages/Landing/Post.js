import React from 'react'
import RequestForm from "../../components/Landing/Seeker/RequestForm";
import Wrapper from "../../components/Landing/shared/Wrapper";
import {Typography} from "@mui/material";
import {Box} from "@mui/system";

const Post = () => {
    return (
        <Wrapper>
            <Box textAlign='center'>
                <Typography variant='h3' color='primary'>
                    Post For Seeker
                </Typography>
            </Box>

            <RequestForm/>
        </Wrapper>
    )
}

export default Post
