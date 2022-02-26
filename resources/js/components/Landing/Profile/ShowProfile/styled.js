import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    card: {
        background: '#E3364A',
        borderRadius: '10px',
        width: '50%',
        marginTop: '10px'
    },


    cardIcon: {
        borderRadius: '0 !important',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },
    profileImg: {
        width: '100%',
        height: '400px',
        borderRadius: '0 !important',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },


    button: {
        marginLeft: 10,
        width: 60,
        height: 60,
        fontSize: 12,
        borderRadius: '50%'

    },


    checkbox: {
        "& .MuiFormGroup": {
            width: '100px',
        }

    },
}))
