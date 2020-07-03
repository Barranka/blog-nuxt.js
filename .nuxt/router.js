import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6938993b = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _0634a78e = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _5936b36c = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages_blog_index" */))
const _e5377a5e = () => interopDefault(import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages_admin_auth_index" */))
const _76a508f6 = () => interopDefault(import('..\\pages\\admin\\comments\\index.vue' /* webpackChunkName: "pages_admin_comments_index" */))
const _f21bf1a8 = () => interopDefault(import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages_admin_new-post_index" */))
const _768a427e = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages_admin__postId_index" */))
const _6eb20510 = () => interopDefault(import('..\\pages\\blog\\_id\\index.vue' /* webpackChunkName: "pages_blog__id_index" */))
const _1a6af7a8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/blog-nuxt/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _6938993b,
    name: "about"
  }, {
    path: "/admin",
    component: _0634a78e,
    name: "admin"
  }, {
    path: "/blog",
    component: _5936b36c,
    name: "blog"
  }, {
    path: "/admin/auth",
    component: _e5377a5e,
    name: "admin-auth"
  }, {
    path: "/admin/comments",
    component: _76a508f6,
    name: "admin-comments"
  }, {
    path: "/admin/new-post",
    component: _f21bf1a8,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _768a427e,
    name: "admin-postId"
  }, {
    path: "/blog/:id",
    component: _6eb20510,
    name: "blog-id"
  }, {
    path: "/",
    component: _1a6af7a8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
