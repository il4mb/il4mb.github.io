import "animate.css";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


library.add(fas);
library.add(fab)

const app = createApp(App);
app.component("v-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");