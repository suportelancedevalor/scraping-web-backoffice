import { store } from '@/store';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export const paths = {
  login: '/login',
  home: '/home',
  passwordRecovery: '/esqueci-minha-senha',
  passwordReset: '/password/reset',
  register: '/criar-conta',
  not_found: '/not-found',
  myAccount: '/minha-conta',
  passwordUpdate: '/alterar-senha'
}

const routes: Array<RouteRecordRaw> = [

  // AUTH
  {
    path: paths.login,
    name: 'Login',
    component: () => import("@/views/Login/Login.vue"),
    props: true,
  },
  {
    path: paths.passwordRecovery,
    name: 'passwordRecovery',
    component: () => import('@/views/PasswordRecovery/PasswordRecovery.vue'),
  },
  {
    path: paths.passwordReset,
    name: 'passwordReset',
    component: () => import('@/views/PasswordReset/PasswordReset.vue'),
  },

  // REGISTER
  {
    path: `${paths.register}`,
    name: 'register',
    component: () => import('@/views/Register/Register.vue'),
  },

  // HOME
  {
    path: "/",
    redirect: {
      name: "Home",
    },
  },
  {
    path: paths.home,
    name: "Home",
    component: () => import("@/views/Home/Home.vue"),
    props: true,
    // meta: { requiresAuth: true }
  },

  // MY ACCOUNT
  {
    path: paths.myAccount,
    name: 'myAccount',
    component: () => import('@/views/MyAccount/MyAccount.vue'),
    // meta: { requiresAuth: true }
  },
  {
    path: paths.passwordUpdate,
    name: 'passwordUpdate',
    component: () => import('@/views/PasswordUpdate/PasswordUpdate.vue'),
    // meta: { requiresAuth: true }
  },

  // NOT FOUND
  {
    path: paths.not_found,
    name: 'notFound',
    component: () => import('@/views/NotFound/NotFound.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'notFound'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!store.state.session;
  if (to.meta.requiresAuth && !isLoggedIn) {
    next(paths.login);
  } else {
    next();
  }
});

export default router
