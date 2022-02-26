import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    card:{
        background: '#E3364A',
        borderRadius: '10px',
        width: '50%',
        marginTop: '10px'
    },


    cardIcon:{
        borderRadius: '0 !important',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },
    profileImg:{
        width: '100%',
        height: '400px',
        borderRadius: '0 !important',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },
}))
