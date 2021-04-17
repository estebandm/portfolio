import { createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: blueGrey[500],
            light: blueGrey[50]
        },
        secondary: {
            main: '#f6685e'
        }
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "*::-webkit-scrollbar": {
                    width: "0.4em"
                },
                "*::-webkit-scrollbar-track": {
                    "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
                },
                "*::-webkit-scrollbar-thumb": {
                    background: "#ccc",
                    borderRadius: "4px"
                },
                "*::-webkit-scrollbar-thumb:active": {
                    backgroundColor: "#999999"
                },
                "button:focus": {
                    outline: "none"
                },
                ".swal2-container": {
                    zIndex: 1500
                },
                a: {
                    "&:focus, &:hover, &:visited, &:link, &:active": {
                        textDecoration: "none",
                        color: "rgba(255, 255, 255, 0.54)"
                    }
                }
            }
        }
    }
});

export default theme
