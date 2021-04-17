import React from 'react'
import { motion } from 'framer-motion'

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Typography } from './styles'
import { variantContainer, pageTransition } from 'Constants/Variants'
import { ArrowDownMotion } from 'Components/Core/ButtonPagination/ArrowDownMotion'
import Motivation from 'assets/images/Motivation'
import * as ROUTES from 'Constants/Routes'
import 'index.css'

export const Home = () => {
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
            <Typography variant='h3'>Bienvenidos a mi portafolio</Typography>
            <Motivation width={width} height={height}/>              
            <div>
                <Typography variant='h3' display='inline'>Mi nombre es </Typography>
                <Typography variant='h2' display='inline'>Milicich Esteban</Typography>
                <Typography variant='h4'>
                    Soy un desarrollador
                    front end, procedente
                    de Paraná Argentina.
                </Typography>
            </div>            
            <ArrowDownMotion isMovil={isMovil} className='arrowDown' route={ROUTES.ABOUT_ME}/>            
        </motion.div>               
    )
}

export default Home
