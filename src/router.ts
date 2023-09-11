import { createRouter, createWebHistory } from "vue-router";

import jsonData from "./data/about.json";


import Welcome from "./views/Welcome.vue";
import AboutMe from "./views/AboutMe.vue";
import WhatIdo from "./views/WhatIdo.vue";


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: "welcome",
            path: "/",
            component: () => Welcome,
        },
        {
            name: "about me",
            path: "/about-me",
            component: AboutMe,
            props: {
                data: jsonData
            }
        },
        {
            name: "what i do",
            path: "/what-i-do",
            component: WhatIdo,
        },
    ],
})