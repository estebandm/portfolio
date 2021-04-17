import React  from 'react'
import { Switch, Route, Redirect, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import * as ROUTES from 'Constants/Routes'
import Layout from 'Components/Header'
import Home from 'Pages/Home'
import AboutMe from 'Pages/AboutMe'
import Skills from 'Pages/Skills'
import Projects from 'Pages/Projects'
import Contact from 'Pages/Contact'

export default function Routes() {
    const location = useLocation()
    return (
        <div className='app'>
            <Layout>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={location.pathname}>
                        <Route component={Home} exact path={ROUTES.HOME}/>                      
                        <Route   component={AboutMe} exact path={ROUTES.ABOUT_ME} />                                                    
                        <Route  component={Skills} exact path={ROUTES.SKILLS} />                            
                        <Route  component={Projects} exact path={ROUTES.PROJECTS} />                            
                        <Route  component={Contact} exact path={ROUTES.CONTACT} />                            
                        <Redirect to={ROUTES.HOME} />
                    </Switch>
                </AnimatePresence>
            </Layout>
        </div>

    )
}
