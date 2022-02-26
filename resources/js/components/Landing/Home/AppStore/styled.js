import {makeStyles} from "@mui/styles";

import StoreBg from "../../../../assets/images/store-bg.png";

export const useStyles = makeStyles((theme) => ({
    storeBox: {
        background: `url(${StoreBg}) no-repeat top center`,
        height: 500,
        width: '100%',
        objectFit: 'cover'
    },


    avatar: {
        width: '100%',
        height: '100%',
        maxWidth: 120,
        maxHeight: 80,
        borderRadius: '8px',
    },

    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%'
    }


}))
