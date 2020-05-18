export const styles = theme => ({
  '@global': {
    a: {
      display: 'inline-block',
      fontSize: 14,
      color: theme.palette.primary.main,
      textDecoration: 'none',
      fontFamily: theme.typography.fontFamily,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    body: {
      background: '#fffffe',
    },
  },
});
