import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles(() => ({
    box: {
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        maxHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'


    },
    content: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(218, 10, 10, 0.42)',
        position:'absolute',
        top: 0,
        left: 0,
        zIndex: 999
    },

    heroTitle: {
        fontSize: '78px !important',
        textTransform: 'uppercase',

        "@media(max-width: 600px)": {
            fontSize: '24px !important',
        },
    },

    heroDescription: {
        "@media(max-width: 600px)": {
            fontSize: '10px !important',
        },
    },

    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: '0 !important'
    }
}))
