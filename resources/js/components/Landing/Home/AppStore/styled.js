import {makeStyles} from "@mui/styles";

import AppStoreImg from "../../../../assets/images/app-store.png";

export const useStyles = makeStyles((theme) => ({
    storeBox: {
        background: '#DA0A0A',
        position: 'relative',
        '&::after': {
            content: "''",
            width: 100,
            height: 100,
            background: `url(${AppStoreImg}) no-repeat top center`,
            backgroundSize: 'cover',
            position: 'absolute',
            top: 0,
            right: '20%',
            zIndex: 11
        }
    },


    avatar: {
        width: '100%',
        height: '200px',
        borderRadius: '8px',
    },


}))
