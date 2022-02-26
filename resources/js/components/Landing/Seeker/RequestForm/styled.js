import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    requestCard: {
        border: '1px solid #DA0A0A',
    },


    button: {
        // minHeight: '71px !important',
        borderRadius: '11px !important',
        fontSize: '20px !important',
        textTransform: 'capitalize !important',
        fontWeight: '600 !important'
    },

    bloodIcon: {
        width: '50px',
        height: '50px',
        borderRadius: '0 !important',
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    }
}))
