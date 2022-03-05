import {makeStyles} from "@mui/styles";
import EmergencyImg from "../../../../assets/images/emergency.png";
import BloodDropImg from "../../../../assets/images/blood-drop-3.png";

export const useStyles = makeStyles((theme) => ({
    avatar:{
        width: 80,
        height: 80,
        borderRadius: '10px !important',
        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },

    dialogAvatar:{
        width: 60,
        height: 60,
        marginTop: 10,
        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },

    bloodGroupIcon: {
        width: 60,
        height: 60,
        background: `url(${BloodDropImg}) no-repeat top center`,
        backgroundSize: 'contain',
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
