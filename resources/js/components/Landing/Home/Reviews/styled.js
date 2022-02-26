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

    reviewBox: {
        padding: '20px',
        background: `url(${ReviewBgImg}) no-repeat top center`,
        backgroundColor: 'rgba(0, 0, 0, 0.4);',
        backgroundBlendMode: 'multiply',
    },

    reviewCard: {
        borderRadius: '0',
        background: '#FFFFFF',
        opacity: '0.9',
        position: 'relative',
        textAlign: 'center',
    },



    avatar: {
        width: '80%',
        height: '100%',
        marginLeft: 'auto',
        borderRadius: '0 !important'
    }
}))
