import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({

    avatar: {
        width: 300,
        height: 300,
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },
}))
