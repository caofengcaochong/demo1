import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '../lib/css/mui.min.css'
import '../lib/css/icons-extra.css'
import axios from 'axios'
import './filter.js'
Vue.prototype.$http=axios.create({
    baseURL:'http://api.cms.liulongbin.top'
})
Vue.use(MintUI)