import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";

const userId = localStorage.getItem('userId')

const vSocket = new VueSocketIO({
  debug: true,
  connection: SocketIO('localhost:4000', { query: `id=${userId !== null ? userId : 'null'}` }),
});

createApp(App).use(router).use(vSocket).mount("#app");
