import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory}  from 'vue-router'
import store from './store/index.js'
import PrincipalContent from './components/PrincipalContent.vue'


const routes = [
    { path: '/',
      component: PrincipalContent,
      name:'home'
    }
  ]
  
  const router = createRouter({
    mode:'history',
    history: createWebHashHistory(),
    routes, 
  })

const app = createApp(App);
  app.use(router)
  app.use(store)
app.mount('#app')
