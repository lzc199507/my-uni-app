<template>
	<view class="content">
		<view v-if="show">
			<view class="uni-padding-wrap uni-common-mt">
				<form @submit="formSubmit" @reset="formReset">
					<view class="uni-form-item uni-column">
						<view class="uni-list">
							<view class="uni-list-cell uni-list-cell-pd">
								<view class="uni-list-cell-db">{{showForm ? '开始' : '关闭'}}</view>
								<switch :checked="showForm" @change="switchChange" name="switch" />
							</view>
						</view>
					</view>
					<view v-if="showForm">
						<view class="uni-form-item uni-column">
							<view class="title">你的名字:</view>
							<input class="uni-input" name="yourname" placeholder="请输入您的大名~" @input="inputName" />
						</view>
						<view class="uni-form-item uni-column">
							<view class="title">你的名字:</view>
							<view class="uni-list">
								<view class="uni-list-cell">
									<view class="uni-list-cell-left">
										当前选择
									</view>
									<view class="uni-list-cell-db">
										<picker @change="bindPickerChange" :value="index" :range="array" range-key="name" name="boyName">
											<view class="uni-input">{{array[index].name}}</view>
										</picker>
									</view>
								</view>
							</view>
						</view>
						<view class="uni-form-item uni-column">
							<button class="btn" type="primary" plain="true" @click="handleOk">确定</button>
						</view>
						<view v-if="isChooseBoy">
							<view class="uni-form-item uni-column">
								<view class="title">radio</view>
								<radio-group name="radio">
									<label v-if="boyName !== '美国'">
										<radio :value="boyName" /><text>{{boyName}}</text>
									</label>
									<label>
										<radio value="radio2" /><text>选项二</text>
									</label>
									<label>
										<radio value="radio3" /><text>选项3</text>
									</label>
								</radio-group>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">radio</view>
								<radio-group name="radio1">
									<label>
										<radio value="123" /><text>123</text>
									</label>
									<label>
										<radio value="456" /><text>456</text>
									</label>
									<label>
										<radio value="789" /><text>7893</text>
									</label>
								</radio-group>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">radio</view>
								<radio-group name="radio2">
									<label>
										<radio value="aaa" /><text>aaa</text>
									</label>
									<label>
										<radio value="bbb" /><text>bbb</text>
									</label>
									<label>
										<radio value="ccc" /><text>ccc3</text>
									</label>
								</radio-group>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">checkbox</view>
								<checkbox-group name="checkbox">
									<label>
										<checkbox value="checkbox1" /><text>选项一</text>
									</label>
									<label>
										<checkbox value="checkbox2" /><text>选项二</text>
									</label>
								</checkbox-group>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">slider</view>
								<slider value="50" name="slider" show-value></slider>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">input</view>
								<input class="uni-input" name="input" placeholder="这是一个输入框" />
							</view>
							<view class="uni-btn-v">
								<button form-type="submit">Submit</button>
								<button type="default" form-type="reset">Reset</button>
							</view>
						</view>
					</view>
				</form>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				showForm: false,
				isChooseBoy: false,
				index: 0,
				array: [{
					name: '没有'
				}, {
					name: '中国'
				}, {
					name: '美国'
				}, {
					name: '巴西'
				}, {
					name: '日本'
				}],
				yourname: '',
				boyName: ''
			}
		},
		methods: {
			inputName(e) {
				this.yourname = e.detail.value
			},
			switchChange(e) {
				this.showForm = e.target.value
			},
			bindPickerChange(e) {
				this.index = e.target.value
			},
			handleOk() {
				console.log(this.index)
				const name = this.yourname.replace(/\s/g, '')
				console.log(name)
				if (name === '') {
					uni.showModal({
						title: "提示",
						content: "请输入你的大名",
						showCancel: false,
						confirmText: "确定"
					})
					this.isChooseBoy = false
					return
				}
				if (name !== '林志诚') {
					uni.showModal({
						title: "sorry",
						content: "很抱歉您不能继续这个测试",
						showCancel: false,
						confirmText: "确定"
					})
					this.isChooseBoy = false
					return
				}
				if (this.index === 0) {
					uni.showModal({
						title: "我差点信了！",
						content: "别骗人了，你竟然没有***",
						showCancel: false,
						confirmText: "确定"
					})
					this.isChooseBoy = false
				} else {
					this.boyName = this.array[this.index].name
					this.isChooseBoy = true
				}
			},
			formSubmit: function(e) {
				var formdata = e.detail.value
				console.log(formdata)
				uni.showModal({
					content: '表单数据内容：' + JSON.stringify(formdata),
					showCancel: false
				});
			},
			formReset: function(e) {
				console.log('清空数据')
			}
		},
		onLoad() {
			console.log(uni)
			uni.showToast({
				title: '即将进入',
				icon: 'loading',
				mask: true,
				duration: 3000,
				success: () => {
					setTimeout(() => {
						this.show = true
					}, 3000)
				}
			});
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
	}

	.btn {
		width: 35%;
	}
</style>
