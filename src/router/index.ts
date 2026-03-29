import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import AppointmentView from '../views/AppointmentView.vue'
import AdminView from '../views/AdminView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginView },
    { path: '/cadastro', component: RegisterView },
    { path: '/dashboard', component: DashboardView },
    { path: '/agendamentos', component: AppointmentView },
    { path: '/admin', component: AdminView }
  ]
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')

  if ((to.path === '/dashboard' || to.path === '/agendamentos' || to.path === '/admin') && !user) {
    return next('/')
  }

  if (to.path === '/admin' && user) {
    const parsedUser = JSON.parse(user)
    if (parsedUser.role !== 'secretary') {
      return next('/dashboard')
    }
  }

  next()
})

export default router