import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    footer: {
        background: 'linear-gradient(180deg, #F9311D 0%, #DA0A0A 100%)',
    },
    avatar: {
        width: '200px',
        height: '40px',
        borderRadius: '0 !important',
        margin: 'auto',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    }
}));

