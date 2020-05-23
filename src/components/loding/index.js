import Vue from 'vue'
import Loading from './Loading.vue'

const loading = Vue.extend(Loading)

let instance = null
let timer = null

export default {
	open (time) {
		if (!instance) {
			instance = new loading({
				el: document.createElement('div')
			})
			if (instance.visible) return
			document.body.appendChild(instance.$el)
			Vue.nextTick(() => {
				instance.visible = true
				if (!isNaN(time) && time > 0) {
					timer = setTimeout(() => {
						this.close()
					}, time)
				}
			})
		}
	},
	close () {
		instance && instance.close()
		instance = null
	}
}