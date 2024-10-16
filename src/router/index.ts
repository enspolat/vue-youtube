import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import { useAuthStore } from '@/stores/authStore'
import CategoryView from '../views/CategoryItem.vue'
import CartView from '../views/CartBox.vue'
import LoginView from '../views/LoginVieww.vue'
import pdfPage from '@/views/pdfPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: 'MainLayout'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        layout: 'LoginLayout'
      }
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryView,
      meta: {
        authRequired: true,
        layout: 'MainLayout'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: {
        authRequired: true,
        layout: 'MainLayout'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
      meta: {
        authRequired: true,
        layout: 'MainLayout'
      }
    },
    {
      path: '/pdfPage',
      name: 'pdfPage',
      component: pdfPage,
      meta: {
        layout: 'pdfPage'
      }
    }
  ]
})

router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.authRequired && !authStore.isAuth) {
    location.href = '/login'
  }
})

export default router
