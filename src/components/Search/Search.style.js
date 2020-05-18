export const styles = (theme) => ({
    header: {
        width: 1200,
        margin: 'auto',
        marginTop: 64
    },

    searchBox: {
        width: '40%',
        margin: 'auto',
        marginTop: 50
    },
    select: {
        width: '90%'
    },
    searchBtn: {
        color: '#fff',
        width: 150,
        height: 50,
        borderRadius: 0,
        textTransform: 'none',
        boxShadow: 'none'
    },

    input: {
        height: 50,
        border: `1px solid #003f60`,
        padding: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px`,
        fontSize: '1rem',
        boxSizing: 'border-box'
    },

    iconBtnSearch: {
        marginRight: theme.spacing.unit
    },
    inputBase: {
        padding: '7px 0'
    },
    loading: {
        height: 48,
        padding: '4px 16px',
        display: 'flex',
        alignItems: 'center'
    },

});