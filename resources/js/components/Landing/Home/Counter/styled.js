import {makeStyles} from "@mui/styles";
import CounterImg from '../../../../assets/images/counter-bg.png'

export const useStyles = makeStyles(() => ({
    wrapper: {
        background: `url(${CounterImg}) no-repeat top center`,
        position: 'relative',
        minHeight: 522,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        '&::before': {
            content: "''",
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.69)',
            position: 'absolute',
            top: 0,
            left: 0
        }
    },

    counterAvatar: {
        width: '100px !important',
        height: '100px !important',
        borderRadius: '0 !important',
        margin: 'auto'
    },
    counterTitle: {
        fontSize: '48px !important',
    },

    counterCard: {
        borderRadius: '7px !important',
        zIndex: 999,
        position: 'relative',
        '& .MuiCardContent-root': {
            padding: '30px !important'
        }
    }
}))
