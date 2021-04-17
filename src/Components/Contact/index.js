import React from 'react'
import { motion } from 'framer-motion'

import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import * as ROUTES from 'Constants/Routes'
import ArrowDownMotion from 'Components/Core/ButtonPagination/ArrowDownMotion'
import { variantContainer, pageTransition } from 'Constants/Variants'
import SentMessage from 'assets/images/SentMessage'
import { useStyles, Typography } from './styles'
import 'index.css'

export const Contact = () => {

    const classes = useStyles()
    const isMovil = useMediaQuery('(max-width:600px)')
    const classContainer = isMovil ? 'container' : 'container container--marginTop'
    const width = isMovil ? '100%' : '406px'
    const height = isMovil ? '11rem' : '306px'

    return (
        <motion.div 
            className={classContainer}
            transition={pageTransition}
            variants={variantContainer}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <Typography variant='h4'>
                Cuéntame de forma general o detallada el proyecto del que le gustaría que forme parte y me pondré en contacto lo antes posible.
            </Typography>
            <SentMessage width={width} height={height}/>
            <div className={classes.fullWidth}>
                <Typography variant='h4'>Mis redes sociales</Typography>                
                <div>
                    <Button 
                        href="https://www.linkedin.com/in/esteban-milicich-3362ba167" 
                        target="_blank"                   
                        disableRipple
                    >
                        Linkedin 
                        <LinkedInIcon/>                   
                    </Button>
                    <Button 
                        href="https://www.instagram.com/estebanmilicich/" 
                        target="_blank"                   
                        disableRipple
                    >
                        Instagram 
                        <InstagramIcon/>                   
                    </Button>
                </div>
            </div>
            <ArrowDownMotion isMovil={isMovil}  route={ROUTES.HOME} />  
        </motion.div>
    )
}

export default Contact
