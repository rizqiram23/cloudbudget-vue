import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloud, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons' //icon yang mau diinsert taro disini
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCloud, faCaretDown, faCaretRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
