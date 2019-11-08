<template>
	<view class="content">
		<view class="fullpage-wp" v-fullpage="opts">
			<view class="uni-header-logo">
				<image class="uni-header-image home" v-animate="{value: 'bounceInRight', delay: 400}" src="/static/img/welcome.jpg"></image>
				<view v-if="hasLogin" class="hello" v-animate="{value: 'rotateInDownLeft', delay: 1400}">
					<view class="title">
						您好 {{userName}}，您已成功登录。
					</view>
					<view class="ul">
						<view>这是 uni-app 带登录模板的示例App首页。</view>
						<view>在 “我的” 中点击 “退出” 可以 “注销当前账户”</view>
					</view>
				</view>
				<view v-if="!hasLogin" class="hello" v-animate="{value: 'rotateInDownLeft', delay: 1400}">
					<view class="title">
						您好 游客。
					</view>
					<view class="ul">
						<view>这是 uni-app 带登录模板的示例App首页。</view>
						<view>在 “我的” 中点击 “登录” 可以 “登录您的账户”</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				currenIndex: 0,
				opts: {
					start: 0,
					dir: 'v',
					duration: 500,
					beforeChange: (currentSlideEl, currenIndex, nextIndex) => {
						this.currenIndex = nextIndex
					}
				},
			}
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			if (!this.hasLogin) {
				uni.showModal({
					title: '没有登录哦',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login'
								});
							} else {
								uni.navigateTo({
									url: '../login/login'
								});
							}
						}
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul {
		font-size: 30upx;
		color: #8f8f94;
		margin-top: 50upx;
	}

	.ul>view {
		line-height: 50upx;
	}

	.uni-header-logo {
		padding: 15px 15px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10upx;

		.uni-header-image.home {
			width: 100%;
			height: 180px;
		}
	}
</style>
