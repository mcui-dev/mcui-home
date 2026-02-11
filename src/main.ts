import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const script = document.createElement('script')
script.src = 'https://rjsperf.myalicdn.com/sdk.js'
script.async = true
document.head.appendChild(script)

createApp(App).mount('#app')
