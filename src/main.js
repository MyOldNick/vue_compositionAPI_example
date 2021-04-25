import { createApp } from "vue";
import App from "./App.vue";
//router
import router from "./router";
//store
import store from './store'


createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
