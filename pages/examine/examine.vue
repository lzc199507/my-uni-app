<template>
	<view class="content">
		<view v-if="show">
			<view class="uni-padding-wrap uni-common-mt">
				<form @submit="formSubmit" @reset="formReset">
					<view class="uni-form-item uni-column">
						<view class="uni-list">
							<view class="uni-list-cell uni-list-cell-pd">
								<view class="uni-list-cell-db">{{showForm ? '开始做咯' : '不做了'}}</view>
								<switch :checked="showForm" @change="switchChange" name="switch" />
							</view>
						</view>
					</view>
					<view v-if="showForm">
						<view class="uni-form-item uni-column">
							<view class="title">您的名字:</view>
							<input class="uni-input" name="yourname" placeholder="please input your name" @input="inputName" />
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
								<view class="title topic">about you</view>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">age</view>
								<view class="uni-list">
									<radio-group name="age">
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="16" />
											</view>
											<view>16</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="20" />
											</view>
											<view>20</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="21" />
											</view>
											<view>21</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="38" />
											</view>
											<view>38</view>
										</label>
									</radio-group>
								</view>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">height</view>
								<view class="uni-list">
									<radio-group name="height">
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="120~157cm" />
											</view>
											<view>120~157cm</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="158cm" />
											</view>
											<view>158cm</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="159cm" />
											</view>
											<view>159cm</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="160cm" />
											</view>
											<view>160cm</view>
										</label>
									</radio-group>
								</view>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">weight</view>
								<view class="uni-list">
									<radio-group name="weight">
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="~45kg" />
											</view>
											<view>~45kg</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="46~47kg" />
											</view>
											<view>46~47kg</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="48~49kg" />
											</view>
											<view>48~49kg</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="50kg~" />
											</view>
											<view>50kg~</view>
										</label>
									</radio-group>
								</view>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">telephone</view>
								<view class="uni-list">
									<radio-group name="telephone">
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="15818068714" />
											</view>
											<view>15818068714</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="15819066714" />
											</view>
											<view>15819066714</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="15819068714" />
											</view>
											<view>15819068714</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="15819086714" />
											</view>
											<view>15819086714</view>
										</label>
									</radio-group>
								</view>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">idol</view>
								<view class="uni-list">
									<radio-group name="idol">
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="张国荣" />
											</view>
											<view>张国荣</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="林忆莲" />
											</view>
											<view>林忆莲</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="张学友" />
											</view>
											<view>张学友</view>
										</label>
										<label class="uni-list-cell uni-list-cell-pd">
											<view>
												<radio value="乌蝇哥" />
											</view>
											<view>乌蝇哥</view>
										</label>
									</radio-group>
								</view>
							</view>
							<view class="uni-form-item uni-column">
								<view class="title">favorite song</view>
								<input class="uni-input" name="favoriteSong" placeholder="please input your favorite song" />
							</view>
							<view v-if="showPart2" class="uni-form-item uni-column">
								<view class="title">age</view>
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
							<view v-if="showPart2" class="uni-form-item uni-column">
								<view class="title">age</view>
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
							<view v-if="showPart2" class="uni-form-item uni-column">
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
							<view v-if="showPart2" class="uni-form-item uni-column">
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
							<view v-if="showPart2" class="uni-form-item uni-column">
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
							<view v-if="showPart2" class="uni-form-item uni-column">
								<view class="title">slider</view>
								<slider value="50" name="slider" show-value></slider>
							</view>
							<view v-if="showPart2" class="uni-form-item uni-column">
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
				showPart2: false,
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
				this.isChooseBoy = true
				return
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
				const {
					yourname
				} = formdata
				if (!this.showPart2 && yourname !== '') {
					uni.showModal({
						title: "恭喜通过第一步about you！",
						content: "请完成第二步about him!",
						showCancel: false,
						confirmText: "确定"
					})
					this.showPart2 = true;
					return
				}
				if (this.showPart2) {
					if (yourname === '林志诚') {
						uni.showToast({
							title: "恭喜通过！",
							icon: "success",
							duration: 3000,
							mask: true,
							success: () => {
								setTimeout(() => {
									uni.navigateTo({
										url: '../reg/reg'
									})
								}, 2000)
							}
						})
					}
				}
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

<style lang="scss">
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
</style>
