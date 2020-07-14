import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'
import Login from '../components/Login'
import StoriesPage from '../components/StoriesPage'
import StoriesAll from '../components/StoriesAll'
import StoriesFamous from '../components/StoriesFamous'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { 
          path: '/',
          name: 'home',
          component: Hello 
        },
        { 
          path: '/login',
          name: 'login',
          component: Login 
        },
        {
            path: '/stories',
            component: StoriesPage,
            children: [
                {
                    path: '',
                    name: 'stories.all',
                    component: StoriesAll
                },
                {
                    path: 'famous',
                    name: 'stories.famous',
                    component: StoriesFamous
                }
            ]
        },
        {
            path: ':id/edit',
            name: 'stories.edit',
            component: StoriesEdit
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})