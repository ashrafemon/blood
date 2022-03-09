import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    card: {
        background: '#E3364A',
        borderRadius: '10px',
        width: '50%',
        marginTop: '10px',
        position: 'relative',

        "&:before":{
            position: 'absolute',
            content: "''",
            width: 2,
            height: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white'

        }
    },


    cardIcon: {
        borderRadius: '0 !important',
        minHeight: 50,
        minWidth: 50,

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

    modal: {
        zIndex: 1112,
    },
    button: {
        fontSize: 14,
        maxWidth: 45,
        maxHeight: 45,
        minHeight: 45,
        minWidth: 45,
        border: '1px solid ' + theme.palette.primary.main,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },

    selectedButton: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff'
    },


    checkbox: {
        "& .MuiFormGroup": {
            width: '100px',
        }

    },
}))
