import React from 'react'
import { motion } from 'framer-motion'

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Typography } from './styles'
import { variantContainer, pageTransition } from 'Constants/Variants'
import { ArrowDownMotion } from 'Components/Core/ButtonPagination/ArrowDownMotion'
import SliderProjects from './SliderProjects'
import * as ROUTES from 'Constants/Routes'
import 'index.css'

export const Home = () => {
    const isMovil = useMediaQuery('(max-width:600px)')
    const classContainer = isMovil ? 'container' : 'container container--marginTop'

    return (        
        <motion.div
            className={classContainer}
            variants={variantContainer}
            transition={pageTransition}
            initial='hidden'
            animate='show'
            exit='exit'
        >   
        <Typography variant='h4'>Estos son algunos de mis proyectos</Typography>            
        <SliderProjects/>
        <ArrowDownMotion isMovil={isMovil} className='arrowDown' route={ROUTES.CONTACT}/>            
        </motion.div>               
    )
}

export default Home
