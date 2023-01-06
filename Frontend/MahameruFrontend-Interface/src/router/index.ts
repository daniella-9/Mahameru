import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';
import RegisterPage from '../views/RegisterUser.vue';
import HomePage from '../views/HomePage.vue';
import InboxPage from '../views/InboxPage.vue';
import UserProfile from '../views/UserProfile.vue';
import NewChatPage from '../views/NewChatPage.vue';
import ViewChatPage from '../views/ViewChatPage.vue';
import FriendsList from '../views/FriendsList.vue'
import EditContact from '../views/EditContact.vue'
import NewContact from '../views/NewContact.vue'
import ChannelPage from '../views/ChannelPage.vue'
import InsideChannel from '../views/InsideChannel.vue'
import ChannelInfo from '../views/InfoChannel.vue'
import ChannelRegis from '../views/RegisterChannel.vue'
import AddMember from '../views/Member.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/RegisterUser'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        name: 'Home',
        component: HomePage
      },
      {
        path: 'inbox-user',
        name: 'InboxChat',
        component: InboxPage
      },
      {
        path: 'inbox-channel',
        name: 'ChannelPage',
        component: ChannelPage
      },
    ]
  },
  {
    path : '/userprofile:id',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/newchat',
    name: 'NewChat',
    component: NewChatPage
  },
  {
    path: '/viewchat',
    name: 'ViewChat',
    component: ViewChatPage
  },
  {
    path: '/FriendsList',
    name: 'FriendsList',
    component: FriendsList
  },
  {
    path: '/EditContact',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/NewContact',
    name: 'NewContact',
    component: NewContact
  },
  {
    path: '/RegisterUser',
    name: 'RegisterUser',
    component: RegisterPage
  },
  {
    path: '/InsideChannel',
    name: 'inside channel',
    component: InsideChannel
  },
  {
    path: '/InfoChannel',
    name: 'Info Channel',
    component: ChannelInfo
  },
  {
    path: '/RegisterChannel',
    name: 'Register Channel',
    component: ChannelRegis
  },
  {
    path: '/AddMember',
    name: 'AddMember Channel',
    component: AddMember
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
