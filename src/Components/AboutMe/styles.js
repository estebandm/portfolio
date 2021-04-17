import withStyles from '@material-ui/core/styles/withStyles'
import MuiTypography from '@material-ui/core/Typography'

export const Typography = withStyles(({ palette, breakpoints }) => ({
    h4: {
        color: '#eceff1',
        textShadow: `2px 1px 4px ${palette.primary.main}`,
        marginBottom: '1rem',
        [breakpoints.down('sm')]: {
            fontSize: '1.7rem'
        },    
        [breakpoints.down('xs')]: {
            fontSize: '1.3rem'
        }
    }
}))(MuiTypography)
