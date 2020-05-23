<template>
	<view class="view-home">
		<view class="search-box">
			<u-search
				shape="square"
				:placeholder="search.placeholder"
				v-model="search.value"
				:clearabled="true"
				:show-action="false"
				@search="searchEv"
			/>
		</view>
		<view class="tab-box">
			<u-tabs
				:list="tabList"
				:isScroll="true"
				active-color="#00aa00"
				:current="tabActiveIdx"
				@change="tabChange"
			></u-tabs>
		</view>
		<view class="swiper-box">
			<swiper
				:indicator-dots="true"
				:autoplay="true"
				:interval="2500"
				:duration="1000"
				indicator-active-color="#00aa00"
			>
				<block v-for="(swiper, index) in swiperList" :key="index">
					<swiper-item>
						<view class="swiper-item">
							<image :src="swiper.src" mode="scaleToFill"></image>
							<text class="image-text">{{swiper.article}}</text>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	import homeJson from '../../constant/home.json'
	
	export default {
		data() {
			return {
				title: 'Hello',
				search: {
					value: '',
					placeholder: '毕业季最难忘的事情'
				},
				tabList: homeJson.tab,
				tabActiveIdx: 0,
				swiperList: homeJson.swiper
			}
		},
		computed: {},
		onReady () {
			console.log('首页 Ready')
		},
		onLoad () {
			console.log('首页 Load')
		},
		onHide () {
			console.log('首页 Hide')
		},
		onShow () {
			console.log('首页 Show')
		},
		onShareAppMessage (options) {
			console.log(options)
		},
		methods: {
			...mapMutations(['changeLoading']),
			searchEv () {
				console.log(this.search.value)
			},
			tabChange (idx) {
				this.tabActiveIdx = idx
			}
		}
	}
</script>

<style lang="scss">
	.view-home {
		.search-box {
			padding: 0 3%;
		}
		.tab-box {
			// /deep/ .u-tab-item {
			// 	color: $app-color-theme !important;
			// }
		}
		.swiper-item {
			position: relative;
			.image-text {
				position: absolute;
				color: #ff0000;
				bottom: 24rpx;
				right: 10%;
				font-size: 24rpx;
				width: 100%;
			}
		}
	}
</style>
