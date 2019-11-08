import Vue from 'vue'
import App from './App'

import store from './store'

import VueFullpage from './common/fullpage'
import './common/animate.css'
import './common/fullpage.css'

Vue.use(VueFullpage)

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
