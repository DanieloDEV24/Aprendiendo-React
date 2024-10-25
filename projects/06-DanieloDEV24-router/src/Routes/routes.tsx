// import { HomePage } from '../components/HomePage'
// import { AboutPage } from '../components/AboutPage'
import { SearchPage } from '../components/SearchPage'
import { RouteType } from '../assets/Lib/types'
export const routesArray : RouteType[] =  [
    // {
    //   path: '/',
    //   component: HomePage
    // }, 
    // {
    //   path: '/about',
    //   component: AboutPage
    // }, 
    {
      path: '/search/:query',
      component: SearchPage
    }
  ]
  