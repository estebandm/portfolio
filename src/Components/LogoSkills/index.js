import React from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles';

import logoJs from 'assets/images/skills/icon-javascript.svg'
import logoHtml from 'assets/images/skills/icon-html.svg'
import logoCss from 'assets/images/skills/icon-css3.svg'
import logoOracle from 'assets/images/skills/icon-db-oracle.svg'
import logoFirebase from 'assets/images/skills/icon-firebase.svg'
import logoGit from 'assets/images/skills/icon-git.svg'
import logoGitHub from 'assets/images/skills/icon-github.svg'
import logoNodeJs from 'assets/images/skills/icon-nodejs.svg'
import logoPostgresql from 'assets/images/skills/icon-postgresql.svg'
import logoReact from 'assets/images/skills/icon-react.svg'
import logoSass from 'assets/images/skills/icon-sass.svg'
import logoVsCode from 'assets/images/skills/icon-vs-code.svg'

import 'index.css'

export const useStyles = makeStyles(({breakpoints}) => ({
    skillsWrapper:{
        height: '250px',
        width: '100%',
        overflow: 'hidden', 
        paddingBottom: '3rem',
        boxSizing: 'border-box',
        position: 'relative',
        marginTop: '8rem',
        zIndex: '10',
        [breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        },    
        [breakpoints.down('xs')]: {
            marginTop: '5rem',
        }
    },
    skillsSlider:{
        overflow: 'hidden',
        height: '100px',
        margin: 'auto',
        position: 'relative' 
    },
    skillsSlide:{
        width: '180px',
        height: '100px',
        transition: 'transform .5s',
        [breakpoints.down('sm')]: {
            fontSize: '2.5rem'
        },    
        [breakpoints.down('xs')]: {
            width: '100px',
            height: '80px',
        },
        '&:hover':{
            cursor: 'pointer',
            transform: 'scale(1.2)'
        }
    }

}));

export const LogoSkills = () => {
    const classes = useStyles()
    return (


            <div className={classes.skillsWrapper}>
                <div className='skillsTrack'>      
                    <span className='span'>
                        <img className={classes.skillsSlide} src={logoJs} alt='logo skill'/>                                
                        <img className={classes.skillsSlide} src={logoHtml} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoCss} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoOracle} alt='logo skill'/>                                                        
                        <img className={classes.skillsSlide} src={logoFirebase} alt='logo skill'/>                                                      
                        <img className={classes.skillsSlide} src={logoGit} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoGitHub} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoNodeJs} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoPostgresql} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoReact} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoSass} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoVsCode} alt='logo skill'/>      
          
          
                        <img className={classes.skillsSlide} src={logoJs} alt='logo skill'/>                                
                        <img className={classes.skillsSlide} src={logoHtml} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoCss} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoOracle} alt='logo skill'/>
                        <img className={classes.skillsSlide} src={logoFirebase} alt='logo skill'/>                                                      
                        <img className={classes.skillsSlide} src={logoGit} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoGitHub} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoNodeJs} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoPostgresql} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoReact} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoSass} alt='logo skill'/>                                                    
                        <img className={classes.skillsSlide} src={logoVsCode} alt='logo skill'/>      
                                                                           
                    </span>
                </div> 
            </div>
           /*  <div className={classes.skillsSlider}> 
            <div className={classes.skillsTrack}>
            
             <div className={classes.skillsSlide}>
                    <img src={logoJs} alt='logo skill'/>
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoHtml} alt='logo skill'/>                    
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoCss} alt='logo skill'/>                    
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoOracle} alt='logo skill'/>                        
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoFirebase} alt='logo skill'/>                      
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoGit} alt='logo skill'/>                    
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoGitHub} alt='logo skill'/>                    
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoNodeJs} alt='logo skill'/>                    
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoPostgresql} alt='logo skill'/>                    
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoReact} alt='logo skill'/>                    
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoSass} alt='logo skill'/>                    
                </div>
                <div className={classes.skillsSlide}>
                    <img src={logoVsCode} alt='logo skill'/>                    
                </div> 
            </div>        
    </div> */
               
    )
}

                
export default LogoSkills