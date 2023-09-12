import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    redirect:'/home/inbox',
    component: HomeView,
    children:[
      {
        path: 'inbox',
        name: "inbox",
        children:[
            {
                path: '',
                component: () => import(/* webpackChunkName: "about" */ '../views/InboxView.vue'),
              
            },
            {
                path: ':id',
                name:"inboxV",
                component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
                props: true 
            }
        ]
      },
     
    
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }

  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/home'
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
