
import Vue from 'vue'
import moment from 'moment'
Vue.filter('dateFormat',function(dateStr,dateformat='YYYY-MM-DD HH:mm:ss'){
    return moment(dateStr).format(dateformat)
})