<script>
	import config from '@/app.config.js'
	import { version } from './package.json'
	export default {
		methods: {

		},
		// 监听 - 页面404
		onPageNotFound:function(e) {
			uni.redirectTo({
				url: config.error.url
			})
		},
		onLaunch: function(options) {
			// 注意：config.debug 在正式环境时，值为false，故此{}内的代码只有开发环境才会执行
			if (config.debug) {
				// #ifndef APP-PLUS
				console.log(
					`%c vk-client %c v${version} `,
					'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
					'background:#007aff ;padding: 1px; border-radius: 0 3px 3px 0;  color: #fff; font-weight: bold;'
				);
				// #endif
				console.log('App Launch');
			}
			// 注意：以下代码正式和开发环境都会执行
			// #ifdef MP
			uni.vk.updateManager.updateReady(); // 此代码可以让小程序自动检测最新版本
			// #endif
		},
		onShow: function() {
			if (config.debug) console.log("App Show");
			// #ifdef MP-WEIXIN
			// 检测如果当前是体验版，但没有点HBX的【发行】菜单发布，则提示开发者请点【发行】按钮
			try {
				console.log('当前运行模式: ', process.env.NODE_ENV);
				const info = uni.getAccountInfoSync();
				if (info.miniProgram.envVersion === "trial" && process.env.NODE_ENV !== 'production') {
					// 如果不想要alert弹窗提示，可以将vk.alert改成console.log
					uni.vk.alert('检测到您当前发布的【体验版】是通过【运行】按钮打包发布的，请重新点击HBX上方菜单的【发行】按钮进行打包发布小程序（如果确定是【发行】按钮打包的，请删除手机上的体验版小程序并重新扫码进入）', '重要提示', '好的');
				}
			} catch(err){}
			// #endif
		},
		onHide: function() {
			if(config.debug) console.log('App Hide');
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	// @import "./uni_modules/vk-uview-ui/index.scss";
  @import "./common/css/app.scss";
  
  @import "uview-ui/index.scss";
</style>
