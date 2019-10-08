import Vue from 'vue'

import Select from 'ant-design-vue/lib/select'
import Icon from 'ant-design-vue/lib/icon'
import Upload from 'ant-design-vue/lib/upload'
import Input from 'ant-design-vue/lib/input'
import Button from 'ant-design-vue/lib/button'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'

Vue.use(Button);
Vue.use(Icon);
Vue.use(Select);
Vue.use(Input);
Vue.use(Upload);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
