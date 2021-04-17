import withStyles from '@material-ui/core/styles/withStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
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

export const useStyles = makeStyles(() => ({
    span:{
        transform: 'translateY(-15%)'
    }
}));
