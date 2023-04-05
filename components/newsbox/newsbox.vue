<template>
	<view class="newsbox">
		<view class="pic">
			<image :src="item.picurl" mode="aspectFill"></image>
		</view>
		<view class="text">
			<view class="title">{{item.title}}</view>
			<view class="info" v-if="!item.looktime">
				<text>作者：{{item.author}}</text>
				<text>{{item.hits}}浏览</text>
			</view>
			<view class="info" v-else>
				<text>浏览时间：{{item.looktime}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newsbox",
		props:{
			item:{
				type:Object,
				default(){
					return {
						title:"组件内默认的标题",
						author:"张三",
						hits:668,
						picurl:"../../static/nopic.png",
						looktime:"2023-04-04 18:14:46"
					}
				}
			}
		}
	}
</script>

<style lang="scss"> 
.newsbox{
	display: flex;
	.pic{
		width: 229.5rpx;
		height: 160rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	.text{
		flex: 1;
		padding: 20rpx;
		display: flex;
		flex-direction: column; // 上下排列
		justify-content: space-between; // 两侧排列
		.title{
			font-size: 32rpx;
			color: #333;
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;				//溢出内容隐藏
			text-overflow: ellipsis;		//文本溢出部分用省略号表示
			display: -webkit-box;			//特别显示模式
			-webkit-line-clamp: 1;			//行数
			line-clamp: 2;					
			-webkit-box-orient: vertical;	//盒子中内容竖直排列
		}
		.info{
			font-size: 26rpx;
			color: #999;
			text{
				padding-right: 30rpx;
			}
		}
	}
}
</style>