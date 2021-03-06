import {makeStyles} from "@mui/styles";
import BloodDropImg from '../../../../assets/images/blood-drop.png';
import ReviewBgImg from '../../../../assets/images/review.png';

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


    avatar: {
        width: '100%',
        height: '500px',
        borderRadius: '0 !important',
    },

    volunteerCard: {
        position: 'relative',
    },


    overlay: {
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        zIndex: '11',
        color: 'white',
    },

}))
