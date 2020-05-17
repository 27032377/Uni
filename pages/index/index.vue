<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		computed: {},
		onReady () {
			console.log('首页 Ready')
			this.changeLoading(false)
		},
		onLoad () {
			console.log('首页 Load')
			this.changeLoading(true)
		},
		onHide () {
			console.log('首页 Hide')
		},
		onShow () {
			console.log('首页 Show')
			this.changeLoading(false)
		},
		onShareAppMessage (options) {
			console.log(options)
		},
		methods: {
			...mapMutations(['changeLoading'])
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
