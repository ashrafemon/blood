import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    appBar: {
        "& .MuiToolbar-root": {
            minHeight: "90px !important",
        },
        zIndex: 1111,
        backgroundColor: '#fff'
    },

    list: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "& a": {
            textDecoration: "none",
            color: "#000",
            textTransform: "uppercase",

            "&:hover": {
                color: theme.palette.primary.main,
            },
        },

        "& a.active": {
            color: theme.palette.primary.main,
        },

        "& .MuiListItem-root": {
            width: "initial",

            "& .MuiTypography-root": {
                fontWeight: "600 !important",
                fontSize: 18,
            },
        },

        "@media(max-width: 600px)": {
            flexDirection: "column",
            alignItems: "start",
        },
    },
    logo:{
        borderRadius: '0 !important',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },


    modal: {
        zIndex: 1112,
    },

    loginBtn: {
        background:
            "linear-gradient(180deg, #DA0A0A 0%, #F9311D 100%) !important",
        borderRadius: "32px !important",
        minWidth: "120px !important",
        fontWeight: "600 !important",
        textTransform: "capitalize !important",
        fontSize: 18,
    },


    authLogo:{
        borderRadius: '0 !important',
        margin: 'auto',
        width: '200px',
        height: '100px',

        '& .MuiAvatar-img': {
            objectFit: 'contain !important'
        }
    },

    drawer: {
        zIndex: 999999999999,
        "& .MuiDrawer-paper": {
            width: 200,
        },
    },




}));
