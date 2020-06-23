import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'
import App from './components/App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
Vue.use(MintUI)
const vm = new Vue({
    el:'#app',
    render:h=>h(App),
    router
})