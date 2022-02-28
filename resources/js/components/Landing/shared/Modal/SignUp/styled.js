import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({

    loginLogo:{
        borderRadius: '0 !important',
        margin: 'auto',
        width: '200px',
        height: '100px',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },

    congratesLogo: {
        borderRadius: '0 !important',
        margin: 'auto',
        width: '80%',
        height: '80%',
        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    }
}));

