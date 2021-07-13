import withStyles from '@material-ui/core/styles/withStyles'
import MuiTypography from '@material-ui/core/Typography'

export const Typography = withStyles(( { palette, overrides, breakpoints }) => ({
    h3:{
        color: `${palette.primary.white}`,
        textShadow: `${overrides.textShadow.small} ${palette.primary.dark}`,
        [breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        },    
        [breakpoints.down('xs')]: {
            fontSize: '2rem'
        }
    },
    h4: {
        color: `${palette.primary.white}`,
        textShadow: `${overrides.textShadow.small} ${palette.primary.dark}`,
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
        color: `${palette.primary.white}`,
        textShadow: `${overrides.textShadow.small} ${palette.secondary.dark}`,
        [breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        },           
        [breakpoints.down('xs')]: {
            fontSize: '2rem'
        }
    }
}))(MuiTypography)
