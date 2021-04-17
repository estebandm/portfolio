import makeStyles from '@material-ui/core/styles/makeStyles'
import withStyles from '@material-ui/core/styles/withStyles'
import MuiTypography from '@material-ui/core/Typography'


export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: '5px solid rgb(67, 87, 97)',
    marginTop: '8rem',
    '& .MuiMobileStepper-root':{
        backgroundColor: theme.palette.primary.dark,
    color: 'white',
    '& .MuiButton-root':{
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px'
        }
    }
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '1rem',
    },    
    [theme.breakpoints.down('xs')]: {
        marginTop: '1rem',
    }
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    color: 'white',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
        height: 30,
        fontSize: '12px'
    }
  },
  container:{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gridAutoRows: 'minmax(150px, auto)',
    gridGap: '16px',
    width: '100%',  
    overflowWrap: 'anywhere',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gridAutoRows: 'minmax(150px, 150px)',
    }
  },
  imgContainer: {
    overflow: 'hidden',
    height: 255,
    display: 'block',
    width: '100%',
    border: '5px solid #f6685e',
    borderRadius: '11px',
    [theme.breakpoints.down('xs')]: {
        border: '2px solid #f6685e',
        overflow: 'scroll',
        height: 163,
    }
  },
  descriptionContainer:{
    width: '100%',
    padding: '1rem',
    backgroundColor: 'white',
    margin: '0 auto',
    border: '5px solid #f6685e',
    borderRadius: '11px',
    [theme.breakpoints.down('xs')]: {
        border: '2px solid #f6685e',
        overflow: 'scroll',
        '& strong':{
            fontSize: '11px',
            fontWeight: 900
        }
    }
  },
  margin:{
    marginBottom: '1rem'
  }
}));

export const Typography = withStyles(({ palette, breakpoints }) => ({
    body1:{
        '&:hover, &:link, &:focus, &:visited, &:active' :{
            color: 'black',
            cursor: 'pointer',
            borderBottom: '1px solid black'
        },
        [breakpoints.down('xs')]: {
            fontSize: '12px'
        }
    },
    body2:{
        [breakpoints.down('xs')]: {
            fontSize: '12px'
        }
    },
    h4: {
        color: palette.primary.light,
        textShadow: `2px 1px 4px ${palette.primary.main}`,
        [breakpoints.down('sm')]: {
            fontSize: '1.6rem'
        },    
        [breakpoints.down('xs')]: {
            fontSize: '1.1rem'
        }
    },
    h5: {
        [breakpoints.down('xs')]: {
            fontSize: '1rem'
        }
    }
}))(MuiTypography)
