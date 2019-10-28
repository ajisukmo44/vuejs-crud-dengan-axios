import Vue from 'vue'

import Select from 'ant-design-vue/lib/select'
import Table from 'ant-design-vue/lib/table'
import Form from 'ant-design-vue/lib/form'
import Layout from 'ant-design-vue/lib/layout'
import Menu from 'ant-design-vue/lib/menu'
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
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Table);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
