import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import store from './src/store/index.js'
import loading from 'src/components/loding/index.js'

Vue.use(uView)
Vue.config.productionTip = false

Vue.prototype.$loading = loading

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
