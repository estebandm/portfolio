import { makeStyles } from '@material-ui/core/styles';
import withStyles from '@material-ui/core/styles/withStyles'
import MuiButton from '@material-ui/core/Button';
import MuiIconButton from '@material-ui/core/IconButton';
import MuiListItem from '@material-ui/core/ListItem';

const drawerWidth = 200;

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    header:{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between',
            position: 'relative'
        }      
    },
    alignItems:{
        display: 'flex',
        alignItems: 'center',        
        '& .MuiTypography-h6': {
            marginLeft: '.5rem'
        }
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: theme.palette.primary.dark,
        '&.MuiPaper-root':{
            color: 'white'
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start'
    }
}));

export const Button = withStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(1),
        [theme.breakpoints.down('xs')]: {            
            position: 'absolute',
            right: 0
        }   
    },
    label:{
        color: 'white',
        textShadow: `1px 0 5px ${theme.palette.secondary.dark}`
    }
}))(MuiButton)

export const IconButton = withStyles(() => ({
    label:{
        color: 'white',
    }
}))(MuiIconButton)


export const ListItem = withStyles((theme) => ({
    root:{
        '&.Mui-selected':{
            backgroundColor: theme.palette.secondary.main
        }
    }
}))(MuiListItem)