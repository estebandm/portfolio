import withStyles from '@material-ui/core/styles/withStyles'
import MuiTypography from '@material-ui/core/Typography'

export const Typography = withStyles(( { palette, breakpoints }) => ({
    h3:{
        color: palette.primary.light,
        textShadow: `2px 1px 4px ${palette.primary.main}`,
        [breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        },    
        [breakpoints.down('xs')]: {
            fontSize: '2rem'
        }
    },
    h4: {
        color: palette.primary.light,
        textShadow: `2px 1px 4px ${palette.primary.main}`,
        marginTop: '3rem',
        [breakpoints.down('sm')]: {
            fontSize: '1.6rem',
            marginTop: '5rem'
        },    
        [breakpoints.down('xs')]: {
            fontSize: '1.3rem',
            marginTop: '1rem'
        }
    },
    h2: {        
        color: 'white',
        textShadow: `1px 1px 14px ${palette.secondary.main}`,
        [breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        },           
        [breakpoints.down('xs')]: {
            fontSize: '2rem'
        }
    }
}))(MuiTypography)
