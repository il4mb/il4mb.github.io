import "animate.css";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


library.add(fas);

const app = createApp(App);

// 2. Assign the global variable before mounting
app.config.globalProperties.define = {
    name: 'ilham B',
    contact: {
        github: 'https://github.com/il4mb',
        linkedin: 'https://www.linkedin.com/in/il4mb/',
        email: "durianbohong@gmail.com"
    },
    siteName: 'il4mb'
}

app.component("v-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");