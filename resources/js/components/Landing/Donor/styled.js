import {makeStyles} from "@mui/styles";
import EmergencyImg from "../../../assets/images/emergency.png";

export const useStyles = makeStyles((theme) => ({
    bloodIcon:{
        width: '50px',
        height: '50px',
        borderRadius: '0 !important',
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },


    donorImg:{
        borderRadius: '8px !important',
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },
    donorImgEmergency:{
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
