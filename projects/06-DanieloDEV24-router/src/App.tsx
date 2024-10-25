// import { lazy, Suspense } from 'react'
import './App.css'
import { Router } from './components/Router'
import { Error404Page } from './components/Error404Page'
import { routesArray } from './Routes/routes'
import { Route } from './components/Route' 
import { HomePage } from './components/HomePage'
import { AboutPage } from './components/AboutPage'
// const AboutPage = lazy(() => import ('./components/AboutPage.tsx').then(module => ({default: module.AboutPage})))
function App() {
  return (
    <>
        <h1>DanieloDEV24 Router</h1>
          {/* <Suspense fallback ={<div>Loading...</div>}> */}
          <Router routes={routesArray} DefaultComponent={Error404Page}>
            <Route path='/' component={HomePage}/>
            <Route path='/about' component={AboutPage}/>
          </Router>
          {/* </Suspense> */}
    </>
  )
}

export default App
