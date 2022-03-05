import {makeStyles} from "@mui/styles";
import EmergencyImg from "../../../assets/images/emergency.png";
import BloodDropImg from "../../../assets/images/blood-drop-3.png";

export const useStyles = makeStyles((theme) => ({
    card: {
        boxShadow: '0px 6.40214px 6.40214px rgba(0, 0, 0, 0.08)',
        borderRadius: '15px',
        padding: 0,
    },
    avatar: {
        minWidth: 70,
        minHeight: 70,
        borderRadius: '8px !important',

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


    donorImgEmergency: {
        borderRadius: '8px !important',
        margin: 'auto',
        position: 'relative',
        overflow: 'visible',

        "&:before": {
            content: "''",
            top: -15,
            left: -15,
            position: 'absolute',
            zIndex: 11,
            width: 30,
            height: 30,
            background: `url(${EmergencyImg}) no-repeat top center`,
            backgroundSize: 'cover',
        },

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },

}))
