import Vue from 'vue'
import './globalconfig.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
import App from './components/App.vue'
const vm = new Vue({
    el:'#app',
    render:h=>h(App),
    router
})