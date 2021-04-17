import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CodeIcon from '@material-ui/icons/Code';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { useStyles, Button } from './styles'
import ElevationScroll from './ElevationScroll'
import * as ROUTES from 'Constants/Routes'
import DrawerRight from './DrawerRight';

const initialVariant = {
    home: 'text',
    aboutMe: 'text',
    skills: 'text',
    projects: 'text',
    contact: 'text'
}

export const Header = ({children}) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const [variant, setVariant] = useState(initialVariant)
    let isMovil = useMediaQuery('(max-width:600px)')    

    useEffect(() => {     
        location.pathname === ROUTES.HOME && setVariant({home: 'contained'})
        location.pathname === ROUTES.ABOUT_ME && setVariant({aboutMe: 'contained'})
        location.pathname === ROUTES.SKILLS && setVariant({skills: 'contained'})
        location.pathname === ROUTES.PROJECTS && setVariant({projects: 'contained'})
        location.pathname === ROUTES.CONTACT && setVariant({contact: 'contained'})
    }, [location.pathname])

    const changePage = (nameRoute) => {
        history.push(nameRoute)
    }

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }    

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll >
                <AppBar>
                    <Toolbar className={classes.header}>                        
                        <div className={classes.alignItems}>
                            <CodeIcon /> 
                            <Typography display='inline' variant="h6">
                                Milicich Esteban
                            </Typography>
                        </div>
                        {isMovil ? 
                             <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerOpen}
                                className={clsx(open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>: 
                            <div>
                                <Button variant={variant.home} color='secondary' onClick={() => changePage(ROUTES.HOME)}>Inicio</Button>
                                <Button variant={variant.aboutMe} color='secondary' onClick={() => changePage(ROUTES.ABOUT_ME)}>Sobre mí</Button>
                                <Button variant={variant.skills} color='secondary' onClick={() => changePage(ROUTES.SKILLS)}>Mis habilidades</Button>
                                <Button variant={variant.projects} color='secondary' onClick={() => changePage(ROUTES.PROJECTS)}>Mis proyectos</Button>
                                <Button variant={variant.contact} color='secondary' onClick={() => changePage(ROUTES.CONTACT)}>Contactarme</Button>
                            </div>
                        }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar id="back-to-top-anchor" />
            <Container maxWidth='xl'>
                {children} 
                {isMovil && <DrawerRight open={open} setOpen={setOpen}/>}                        
            </Container>
        </React.Fragment>
    );
}

export default Header