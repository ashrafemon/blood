import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({

    avatar: {
        width: 100,
        height: 100,
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },
    input: {
        display: 'none'
    }
}))
