import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		loading: false
	},
	mutations: {
		changeLoading (state, bol) {
			state.loading = bol
		}
	}
})

export default store