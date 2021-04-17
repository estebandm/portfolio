import React from 'react'
import { motion } from 'framer-motion'

import useMediaQuery from '@material-ui/core/useMediaQuery';

import * as ROUTES from 'Constants/Routes'
import ArrowDownMotion from 'Components/Core/ButtonPagination/ArrowDownMotion'
import { Typography } from './styles'
import { variantContainer, pageTransition } from 'Constants/Variants'
import Developer from 'assets/images/Developer'
import 'index.css'

export const AboutMe = () => {
    const isMovil = useMediaQuery('(max-width:600px)')
    const classContainer = isMovil ? 'container' : 'container container--marginTop'
    const width = isMovil ? '100%' : '406px'
    const height = isMovil ? '11rem' : '306px'
    
    return (
        <motion.div 
            className={classContainer}
            variants={variantContainer}
            transition={pageTransition}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <div>
                <Typography variant='h4'>
                    He trabajado como autodidácta en  pequeños y medianos proyectos, con tecnologías como HTML5, reactjs, y firebase.                
                </Typography>
                <Typography variant='h4'>
                    Recientemente tuve la grata oportunidad de trabajar y contribuir en un proyecto en el ámbito real sobre una aplicación de blockchain.
                </Typography>
            </div>            
            <Developer width={width} height={height}/>                
            <ArrowDownMotion isMovil={isMovil}  route={ROUTES.SKILLS} />
        </motion.div>
    )
}

export default AboutMe
