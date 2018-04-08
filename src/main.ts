import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import NProgress from 'nprogress'; // Progress 进度条
import 'nprogress/nprogress.css'; // Progress 进度条 样式
import 'normalize.css/normalize.css'; // normalize.css 样式格式化

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入自定义样式
import './styles/index.scss'; 
// 引入公共组件
import haina from '@/haina-components/index';
Vue.use(haina);

const whiteList = ['/login', '/authredirect']; // 不重定向白名单

router.beforeEach((to, from, next) => {
  NProgress.start(); // 开启Progress
  next()
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

Vue.config.productionTip = false;

// 生产环境错误日志
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = function(err, vm) {
    // console.log(err, window.location.href)
    // errLog.pushLog({
    //   err,
    //   url: window.location.href,
    //   vm
    // })
  };
}

const vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
