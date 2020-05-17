<script>
	import { mapState } from 'vuex'
	
	export default {
		onLaunch () {
			console.log('App Launch')
		},
		onShow () {
			console.log('App Show')
		},
		onHide () {
			console.log('App Hide')
		},
		onError (err) {
			console.warn('App Error')
			throw new Error(err)
		},
		data () {
			return {}
		},
		computed: {
			...mapState({
				loading: state => state.loading
			})
		},
		watch: {
			loading (bol) {
				console.info('loading', bol)
			}
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
