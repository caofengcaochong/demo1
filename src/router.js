import VueRouter from 'vue-router'
import homecontainer from './components/tarbarcontainer/homecontainer.vue'
import membercontainer from  './components/tarbarcontainer/membercontainer.vue'
import shopcartcontainer from './components/tarbarcontainer/shopcartcontainer.vue'
import searchcontainer from './components/tarbarcontainer/searchcontainer.vue'
import NewList from './components/news/newlist.vue'
import NewInfo from './components/news/newinfo.vue'
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home/',component:homecontainer},
        {path:'/member',component:membercontainer},
        {path:'/shopcart',component:shopcartcontainer},
        {path:'/search',component:searchcontainer},
        {path:'/home/newList',component:NewList},
        {path:'/home/newInfo/:id',component:NewInfo,props:true}
    ],
    linkActiveClass:'mui-active'
})
export default router