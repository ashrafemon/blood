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

    campaignCard: {
        border: '1px solid '+ theme.palette.primary.main,
        transition: 'all 1s',
        borderRadius: '0 !important',

        '& .MuiCardContent-root': {
            padding: '0 !important',
        },
    },

    avatar: {
        width: '100%',
        height: 'auto',
        borderRadius: '0 !important'
    }
}))
