import React from 'react'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'

import withStyles from '@material-ui/core/styles/withStyles'
import MuiIconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import 'index.css'

const IconButton = withStyles(({ breakpoints, palette }) => ({
    root: {
        color: 'white',
        '& .MuiSvgIcon-root':{
            width: '4em',
            height: '4em',
            [breakpoints.down('xs')]: {
            width: '2em',
            height: '2em'
        }
        },
        '&:hover':{
            backgroundColor: 'white',
            color: palette.primary.dark
        }    
    },
}))(MuiIconButton)

const variantsButton = {
    hidden: {        
        y: -8
    },
    show: {
        y: 8,
        transition: {
            duration: .75,
            ease: 'easeIn',
            repeat: Infinity,
            repeatType: 'reverse'
        },        
    }
}

export const ArrowDownMotion = ({route, isMovil = false}) => {
    const history = useHistory()

    const navigation = () => {
        history.push(route)
    }

    if(isMovil){
        return(
            <span className='arrowDown'>
                <IconButton onClick={navigation}>
                    <KeyboardArrowDownIcon />
                </IconButton>
            </span>
        )
    }

    return (
        <motion.span variants={variantsButton} initial='hidden' animate='show' className='arrowDown'>
            <IconButton onClick={navigation}>
                <KeyboardArrowDownIcon />
            </IconButton>
        </motion.span>
    )
}

export default ArrowDownMotion







