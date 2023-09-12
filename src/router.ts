import { createRouter, createWebHistory } from "vue-router";

import jsonData from "./data/about.json";
import technologies from "./data/technologie.json";
import projects from "./data/projects.json.js";
import contacts from "./data/contacts.json";
import certificate from "./data/certificate.json.js";

import Welcome from "./views/Welcome.vue";
import AboutMe from "./views/AboutMe.vue";
import WhatIdo from "./views/WhatIdo.vue";
import MyApproach from "./views/MyApproach.vue";
import ProjectsHighlight from "./views/ProjectsHighlight.vue";
import ContactMe from "./views/ContactMe.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Welcome,
            name: "Welcome",
            props: {
                data: {

                }
            },
            
        },
        {

            path: "/about-me",
            component: AboutMe,
            name: "About me",
            props: {
                data: jsonData,
                certificate: certificate

            }
        },
        {

            path: "/what-i-do",
            component: WhatIdo,
            name: "What i do",
            props: {
                data: technologies
            }
        },
        {
            path: "/projects-highlight",
            component: ProjectsHighlight,
            name: "Projects highlight",
            props: {
                data: projects
            }
        },
        {
            path: "/contact-me",
            component: ContactMe,
            name: "Contact me",
            props: {
                data: contacts
            }
        }
    ],
})