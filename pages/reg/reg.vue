<template>
	<view class="content">
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">his phonenumber</view>
				<input class="uni-input" v-model="number" placeholder="input his phonenumber" />
			</view>
		</view>
		<view class="btn-row  mt0">
			<button type="primary" class="primary" @tap="getCode">点击发送获取验证码</button>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-form-item uni-column">
				<view class="title">验证码</view>
				<input class="uni-input" v-model="code" placeholder="输入验证码" />
			</view>
		</view>
		<view class="btn-row  mt0">
			<button type="primary" class="primary" @tap="checkCode">点击验证</button>
		</view>
		<view v-if="show1" class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input type="text" focus clearable v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row border">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
			<view class="input-row">
				<text class="title">邮箱：</text>
				<m-input type="text" clearable v-model="email" placeholder="请输入邮箱"></m-input>
			</view>
		</view>
		<view v-if="show1" class="btn-row">
			<button type="primary" class="primary" @tap="register">注册</button>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {
				show1: false,
				number: '',
				code: '',
				account: '',
				password: '',
				email: ''
			}
		},
		methods: {
			getCode() {
				console.log(111)
			},
			checkCode() {
				if (this.code === '001' || this.code === '020') this.show1 = true
			},
			register() {
				/**
				 * 客户端对账号信息进行一些必要的校验。
				 * 实际开发中，根据业务需要进行处理，这里仅做示例。
				 */
				if (this.account.length < 5) {
					uni.showToast({
						icon: 'none',
						title: '账号最短为 5 个字符'
					});
					return;
				}
				if (this.password.length < 6) {
					uni.showToast({
						icon: 'none',
						title: '密码最短为 6 个字符'
					});
					return;
				}
				if (this.email.length < 3 || !~this.email.indexOf('@')) {
					uni.showToast({
						icon: 'none',
						title: '邮箱地址不合法'
					});
					return;
				}

				const data = {
					account: this.account,
					password: this.password,
					email: this.email
				}
				service.addUser(data);
				uni.showToast({
					title: '注册成功'
				});
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>
	@import "../../common/uni.css";

	.content {
		padding: 0;
	}

	.uni-padding-wrap {
		width: 690upx;
		padding: 0 30upx;
	}

	.uni-common-mt {
		margin-top: 30upx;
	}

	.uni-form-item .title {
		padding: 20rpx 0;

		&.topic {
			text-align: center;
			color: #f8f8f8;
			background: #f99;
		}
	}

	.btn {
		width: 35%;
	}
	
	.mt0 {
		margin-top: 0px;
	}
</style>
