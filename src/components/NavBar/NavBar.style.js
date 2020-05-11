export const styles = theme => ({
    header: {
        width: '80%',
        margin: 'auto',
        marginTop: 20,
    },
    logoBanner: {
        float: 'left',
        color: '#0d0d0d'
    },
    menu: {
        display: 'flex',
        float: 'right',
        color: '#0d0d0d'
    },
    listItem: {
        display: 'flex',
        padding: theme.spacing(2),
        alignItems: 'center',
        textDecoration: 'none',
        '& > *': {
            color: '#272343',
            cursor: 'pointer'
        },
        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: '#ffd803'
        },
        '&.active': {
            textDecoration: 'underline',
            textDecorationColor: '#ffd803'
        },
    },
});
