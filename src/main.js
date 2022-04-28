import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag";
import { createMetaManager } from 'vue-meta'

const app = createApp(App)
app.use(router)
app.use(createMetaManager())

app.use(VueGtag, {
config: { 
    id: "UA-29028105-1",
},
}, router);

app.mount('#app')
