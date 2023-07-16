import { createApp } from 'vue'
import App from './App.vue'
// import App from './App2.vue'
import router from './router'

const app = createApp(App).use(router)

app.directive("testFn",{
    mounted(el) {
        console.log(el);
    }
})

app.mount('#app')
