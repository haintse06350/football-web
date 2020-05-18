export const styles = theme => ({
  container: {
    width: 1020,
    margin: 'auto',
    marginTop: 30,
    border: '1px solid #dddddd',
  },
  headerContainer: {
    height: 170,
    background: '#eff0f3 !important'
  },
  header: {
    float: 'left',
    display: 'flex',
    padding: 5,
    alignItems: 'center',
  },
  flex: {
    clear: 'both',
    display: 'flex',
    padding: 2
  },
  club: {
    display: 'flex',
    position: 'relative',
    top: -60,
    float: 'right',
    margin: 10,
    marginBottom: 0,
    padding: 5,
    paddingBottom: 0,
    background: '#fffffe !important'
  },
  marketValue: {
    top: 80,
    left: 210,
    position: 'relative',
    float: 'right',
    color: '#fff',
    background: '#039be5'
  },
  noRelative: {
    top: 80,
    left: 195,
    float: 'right',
    color: '#fff',
    background: '#039be5'
  },
  seeDetail: {
    float: 'right',
    '& > a': {
      fontSize: 12
    }
  },
  value: {
    '& > p': {
      fontSize: 50
    }
  },
  clubImg: {
    padding: 5
  },
  clubInfo: {
    padding: 5
  },
  region: {
    fontSize: 12,
    alignItems: 'center',
  },
  tournament: {
    fontSize: 12,
    fontWeight: 700,
    '& > p': {
      color: '#3da9fc'
    }
  },
  teamName: {
    color: '#3da9fc',
    fontWeight: 700,
    padding: 0
  },
  socialMedia: {
    marginLeft: 10,
    color: '#1a3151',
    '& > a': {
      marginLeft: 5,
      textDecoration: 'none',
      color: '#1a3151',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
  },
  image: {
    '& > img': {
      marginTop: -130,
      border: '2px solid #fff',
      background: '#fff'
    }
  },
  trophy: {
    clear: 'both',
    float: 'left',
    position: 'relative',
    left: 150,
    top: 9,
    '& > span': {
      marginLeft: 8
    }
  },
  seeMore: {
    float: 'right',
    marginTop: 65,
    marginLeft: 20,
    '& > a': {
      fontSize: 10,
      color: '#1a3151'
    }
  },
  name: {
    fontSize: 30,
    color: '#1a3151',
    display: 'inline-block'
  },
  info: {
    display: 'flex'
  },
  data: {
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
  },
  bold: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 700
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});
