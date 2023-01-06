import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/Channel.vue'
import InsideChann from '../views/Inside.vue'
import ChannelInfo from '../views/Info.vue'
import ChannelRegis from '../views/Register.vue'
import AddMember from '../views/Member.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/Inside',
    name: 'inside channel',
    component: InsideChann
  },
  {
    path: '/Info',
    name: 'Info Channel',
    component: ChannelInfo
  },
  {
    path: '/Register',
    name: 'Register Channel',
    component: ChannelRegis
  },
  {
    path: '/Member',
    name: 'AddMember Channel',
    component: AddMember
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
