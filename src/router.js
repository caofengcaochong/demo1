import VueRouter from 'vue-router'
import homecontainer from './components/tarbarcontainer/homecontainer.vue'
import membercontainer from  './components/tarbarcontainer/membercontainer.vue'
import shopcartcontainer from './components/tarbarcontainer/shopcartcontainer.vue'
import searchcontainer from './components/tarbarcontainer/searchcontainer.vue'


const router = new VueRouter({
    routes:[
        {path:'/home',component:homecontainer},
        {path:'/member',component:membercontainer},
        {path:'/shopcart',component:shopcartcontainer},
        {path:'/search',component:searchcontainer}
    ]
})
export default router