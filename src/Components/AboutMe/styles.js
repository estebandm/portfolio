import withStyles from '@material-ui/core/styles/withStyles'
import MuiTypography from '@material-ui/core/Typography'

export const Typography = withStyles(({ palette, overrides, breakpoints }) => ({
    h4: {
        color: `${palette.primary.white}`,
        textShadow: `${overrides.textShadow.small} ${palette.primary.dark}`,
        marginBottom: '1rem',
        [breakpoints.down('sm')]: {
            fontSize: '1.7rem'
        },    
        [breakpoints.down('xs')]: {
            fontSize: '1.3rem'
        }
    }
}))(MuiTypography)
