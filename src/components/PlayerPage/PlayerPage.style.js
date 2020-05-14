export const styles = theme => ({
  container: {
    marginTop: 30
  },
  flex: {
    display: 'flex',
    border: '1px solid #dddddd',
    padding: 5
  },
  borderImg: {
    border: '1px solid #fff'
  },
  image: {
    '& > img': {
      width: 120
    }
  },
  name: {
    paddingTop: 10
  },
  info: {
    display: 'flex'
  },
  detail: {
    marginLeft: 20
  },
  player: {
    maxHeight: 400,
    height: 400
  },
  playerDetail: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/8198-2.png)`,
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain'
  },
  title: {
    height: '50%',
  },
  information: {
    height: '50%'
  }
});
