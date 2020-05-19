<template>
	<view class="my_wrapper">
		<text>我的</text>
		<text>{{env}}</text>
	</view>
</template>

<script>
	export default {
		onReady () {
			console.log('env')
			console.log(process.env)
			this.env = process.env.VUE_APP_ENV
		},
		data() {
			return {
				env: ''
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.my_wrapper {
	width: 100%;
	height: 100%;
}
</style>
