import {makeStyles} from "@mui/styles";
import BloodDropImg from '../../../../assets/images/blood-drop.png'

export const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '48px !important',
        textTransform: 'uppercase',
        position: 'relative',

        '&::after': {
            content: "''",
            width: 19,
            height: 30,
            background: `url(${BloodDropImg}) no-repeat top center`,
            backgroundSize: 'cover',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)'
        }
    },
    workCard: {
        borderRadius: '50% !important',
        border: '3px solid '+ theme.palette.primary.main,
        width: 268,
        height: 268,
        cursor: 'pointer',
        transition: 'all 1s',
        margin: 'auto',

        '& .MuiCardContent-root': {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
        },

        '&:hover': {
            transform: 'scale(1.2)'
        }
    },

    workCard2: {
        borderRadius: '50% !important',
        border: '3px solid white',
        width: 268,
        height: 268,
        cursor: 'pointer',
        transition: 'all 1s',
        margin: 'auto',

        '& .MuiCardContent-root': {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#DA0A0A',
        },

        '&:hover': {
            transform: 'scale(1.2)'
        }
    },


    avatar: {
        width: '100%',
        height: '100%',
        maxWidth: 108,
        maxHeight: 108,
        borderRadius: '0 !important'
    },
    avatar2: {
        // position: 'absolute',
        // top: 0,
        // left: '50%',
        // transform: 'translate(-50%)',
        marginTop: -40,
        width: '100%',
        height: '100%',
        maxWidth: 230,
        maxHeight: 150,
        borderRadius: '0 !important'
    }
}))
