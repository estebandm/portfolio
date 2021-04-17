import React from 'react'
import { motion } from 'framer-motion'

import useMediaQuery from '@material-ui/core/useMediaQuery';

import * as ROUTES from 'Constants/Routes'
import ArrowDownMotion from 'Components/Core/ButtonPagination/ArrowDownMotion'
import GummyProgramming from 'assets/images/GummyProgramming'
import { variantContainer, pageTransition } from 'Constants/Variants'
import { Typography } from './styles'
import LogoSkills from 'Components/LogoSkills'
import 'index.css'

export const Skills = () => {
    const isMovil = useMediaQuery('(max-width:600px)')
    const classContainer = isMovil ? 'container' : 'container container--marginTop'
    const width = isMovil ? '100%' : '1000px'
    const height = isMovil ? '40rem' : '1000px'

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
                Estas son las técnologías y habilidades en las que poseo conocimientos.
            </Typography>
            <LogoSkills/>
            <GummyProgramming width={width} height={height}/>
            <ArrowDownMotion isMovil={isMovil}  route={ROUTES.PROJECTS} />  
        </motion.div>
    )
}

export default Skills
