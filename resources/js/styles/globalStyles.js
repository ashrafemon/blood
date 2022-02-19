import {withStyles} from "@mui/styles";
import {Card} from "@mui/material";

export const SiteCard = withStyles(() => ({
    root: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '9px !important',
        '& .MuiCardContent-root': {
            padding: '30px 35px !important'
        }
    }
}))(Card)
