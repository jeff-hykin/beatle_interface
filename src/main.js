/* eslint-disable */
import Vue from "vue"
import App from "./App.vue"
import Router from "./router"
import router from './router'

import "./plugins/css-baseline"
import "./plugins/good-vue"
import "./plugins/keen-ui"
import "./plugins/vue-toasted"
import "./plugins/markdown"
//import { Router } from "./plugins/vue-router"

// global components
import Markdown from "@/components/Markdown"

Vue.config.productionTip = false

new Vue({
    data: () => ({}),
    router:Router,
    render: h => h(App),
    components: {
        Markdown,
    },
}).$mount("#app")
