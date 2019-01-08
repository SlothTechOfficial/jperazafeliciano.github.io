import Vue from 'vue'
import Router from 'vue-router'

import About from './components/about/About'
import Education from './components/education/Education'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import NotFound from './components/notFound/NotFound'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'about-page',
      component: About,
    },
    {
      path: '/education',
      name: 'education-page',
      component: Education,
    },
    {
      path: '/skills',
      name: 'skills-page',
      component: Skills,
    },
    {
      path: '/experience',
      name: 'experience-page',
      component: Experience,
    },
    {
      path: '*',
      name: '404',
      component: NotFound,
    }
  ]
})