import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles'
import MuiTypography from '@material-ui/core/Typography'

export const Typography = withStyles(({ palette, breakpoints }) => ({
    h4: {
        color: palette.primary.light,
        textShadow: `2px 1px 4px ${palette.primary.main}`,
        [breakpoints.down('sm')]: {
            fontSize: '1.6rem'
        },    
        [breakpoints.down('xs')]: {
            fontSize: '1.3rem'
        }
    }
}))(MuiTypography)



export const useStyles = makeStyles(({breakpoints}) => ({
    fullWidth: {        
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexGrow: 1,     
        [breakpoints.down('xs')]: {
            justifyContent: 'flex-start',
            marginTop: '2rem'
        },    
        '& a:focus, a:hover, a:visited, a:link, a:active':{
            backgroundColor: 'transparent',
            '&:hover':{
                color: 'white'
            }
        },
        '& .MuiSvgIcon-root':{
            width: '3em',
            height: '3em',
            [breakpoints.down('xs')]: {
                width: '1.5em',
                height: '1.5em',
            },
            '&:hover':{
                fill: 'white'
            }            
        }
    }
}));
