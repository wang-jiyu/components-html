import { RouteConfig } from "vue-router"
import Home from '@/views/Home.vue'
import Form from '@/views/Form.vue'
import About from '@/views/About.vue'

export const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/home' 
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/form',
    name: 'form',
    component: Form,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  }
]