import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    bloodIcon:{
        width: '50px',
        height: '50px',
        borderRadius: '0 !important',
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    }
}))
