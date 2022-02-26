import {makeStyles} from "@mui/styles";
import EmergencyImg from "../../../../assets/images/emergency.png";

export const useStyles = makeStyles((theme) => ({
    seekerImg:{
        width: '80px',
        height: '80px',
        borderRadius: '10px !important',
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },

    bloodIcon:{
        width: '50px',
        height: '50px',
        borderRadius: '0 !important',
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },

    card: {
        border: '1px solid '+ theme.palette.primary.main,
        borderRadius: 14,
    },

    cardEmergency: {
        border: '1px solid '+ theme.palette.primary.main,
        borderRadius: 14,
        position: "relative",
        overflow: 'visible',

        "&:before": {
            content: "''",
            top: -15,
            left: -15,
            position: 'absolute',
            zIndex: 11,
            width: 40,
            height: 40,
            background: `url(${EmergencyImg}) no-repeat top center`,
            backgroundSize: 'cover',
        },
    }
}))
