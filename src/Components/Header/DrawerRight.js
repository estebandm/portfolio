import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { ListItem, IconButton, useStyles } from './styles'
import * as ROUTES from 'Constants/Routes'

const menu = [
    {label:'Inicio', route: '/home'},
    {label:'Sobre mí', route: '/about me'},
    {label:'Mis habilidades', route: '/skills'},
    {label:'Mis proyectos', route: '/projects'},
    {label:'Contactarme', route: '/contact'},
]

export const DrawerRight = ({open, setOpen}) => {
    const theme = useTheme();
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const handleDrawerClose = () => {
        setOpen(false)
    }

     const changePage = (nameRoute) => {
        nameRoute === 'Inicio'   && history.push(ROUTES.HOME)
        nameRoute === 'Sobre mí' && history.push(ROUTES.ABOUT_ME)
        nameRoute === 'Mis habilidades' && history.push(ROUTES.SKILLS)
        nameRoute === 'Mis proyectos' && history.push(ROUTES.PROJECTS)
        nameRoute === 'Contactarme' && history.push(ROUTES.CONTACT)
        setOpen(false)
    }


    return (
       <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
            paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </div>
            <Divider />
            <List>
            {menu.map(item => (
                <ListItem
                    button
                    selected = {item.route === location.pathname}
                    key={item.label}>                            
                    <ListItemText onClick={() => changePage(item.label)} primary={item.label} />
                </ListItem>
            ))}
            </List>                        
        </Drawer>           
    )
}

export default DrawerRight