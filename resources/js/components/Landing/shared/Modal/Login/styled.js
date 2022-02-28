import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({

 // box:{
 //     padding
 // }


    loginLogo:{
        borderRadius: '0 !important',
        margin: 'auto',
        width: '200px',
        height: '100px',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },
}));

