<template>
	<view class="user">
		<view class="top">
			<image src="../../static/logo.png" mode=""></image>
			<text>浏览历史</text>
		</view>
		<view class="connent">
			<view class="row" v-for="item in listArr">
				<newsbox :item="item" @click.native='goDetail(item)'></newsbox>
			</view>
		</view>
		<view class="nohistory" v-if="!listArr.length">
			<image src="../../static/images/no-data.jpg" mode="widthFix"></image>
			<text>暂无浏览记录</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				listArr:[]
			};
		},
		onShow() {
			this.getData()
		},
		methods:{
			// 跳转到详情页
			goDetail(item){
				uni.navigateTo({
					url:`/pages/detail/detail?cid=${item.classid}&id=${item.id}`
				})
			},
			// 获取缓存浏览记录
			getData(){
				let hisArr = uni.getStorageSync("historyArr") || []
				this.listArr = hisArr
			}
		}
	}
</script>

<style lang="scss">
.user{
	.top{
		padding: 50rpx 0;
		background: #F8F8F8;
		color: #555;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		image{
			width: 150rpx;
			height: 150rpx;
		}
		.text{
			font-size: 38rpx;
			padding-top: 20rpx;
		}
	}
	.connent {
		padding: 30rpx;
		.row{
			border: 1px dotted #efefef;
			padding: 15rpx 0;
		}
	}
	.nohistory{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		image{
			width: 450rpx;
		}
		.text{
			font-size: 26rpx;
			color:#888;
		}
	}
}
</style>
