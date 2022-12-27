import { createStyles } from '@mantine/core';

import { colors } from '../../constants/colors';

export const useStyles = createStyles((theme) => ({
    active: {
        color: `${colors.primaryColor}`
    },

    activeResume: {
        backgroundColor: `${colors.primaryColor}`,
        color: theme.colors.dark[9],
        cursor: "default"
    },
    bodyBackground: {
        background: theme.colorScheme === 'light' ? theme.colors.gray[0] : theme.colors.dark[7],
        margin: "0"
    },

    burger: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
        width: "100%",
    },

    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
        maxWidth: "1600px",
        [theme.fn.largerThan("md")]: {
            width: "100%",
            maxWidth: "1440px",

        },
    },

    headerBackground: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        background: "#010101"
    },

    links: {
        display: "flex",
        [theme.fn.smallerThan("md")]: {
            display: "none"
        }
    },

    logo: {
        marginLeft: 20,
        [theme.fn.smallerThan("md")]: {
            display: "none"
        }
    },

    navbar: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 15,
        [theme.fn.largerThan("md")]: {
            display: "none"
        },

    },

    navitem: {
        margin: "0 15px",
        color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.dark[5],
        fontWeight: 600,

        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: `${colors.primaryColor}`,
            textDecorationThickness: '4px'
        }
    },

    resume: {
        backgroundColor: "transaparent",
        border: `2px solid ${colors.primaryColor}`,
        borderRadius: "10px",
        padding: "8px 13px",
        color: `${colors.primaryColor}`,
        textAlign: "center",
        [theme.fn.smallerThan("md")]: {
            width: '120px',
            margin: '7px 7px'
        },

        '&:hover': {
            backgroundColor: `${colors.primaryColor}`,
            color: theme.colors.dark[9],
            textDecoration: 'none'
        },
    },

}))