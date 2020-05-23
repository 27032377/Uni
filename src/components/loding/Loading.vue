<template>
	<view class="loading-com" v-show="visible">
		<view class="loading-content">
			<text class="text">Loading...</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'Loading',
		data () {
			return {
				visible: false
			}
		},
		methods: {
			close () {
				this.visible = false
			}
		}
	}
</script>

<style lang="scss">
	.loading-com {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		left: 0;
		top: 0;
		z-index: 2;
		.loading-content {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			.text {
				color: #ffffff;
			}
		}
	}
</style>
